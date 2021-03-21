// Bar Chart
var xValues = ["Category", "Category", "Category", "Category", "Category"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["#67A4DF","#E96E8A","#6CCBA8","#F9D35F","#A867DF"];

new Chart("myChartBar", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {
        display: false,
    }
  }
});

// Grafico Lineare Home
var xValues = ['Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','Sabato','Domenica'];

new Chart("myChartline", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [30,50,23,101,55,60,8],
      borderColor: "#68AFDE",
    //   Fill true per riempire la parte sotto la linea
      fill: false
    }]
  },
  options: {
    legend: {
        display: false,
    }
  }
});

// Grafico a doughnut Home
var xValues = ["Category", "Category", "Category", "Category", "Category"];
var yValues = [55, 49, 44, 24, 15];
var barColors = [
  "#67A4DF",
  "#E96E8A",
  "#6CCBA8",
  "#F9D35F",
  "#A867DF"
];

new Chart("myChartPie", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    responsive: true,
    legend: {
        position: 'right',
        labels: {
            fontColor: "#919BA8",
            boxWidth: 3,
            padding: 14
        }
    }
}
});



// FUnzione ricerca in tabella
function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        // da 0 (ID) a 5(Totale)
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }


  // FUnzione ricerca in tabella
function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInputTask");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTableTask");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
      // da 0 (ID) a 5(Totale)
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}



//   Seconda tabella
// $(document).ready(function () {
//     $('#dtBasicExample').DataTable();
//     $('.dataTables_length').addClass('bs-select');
//   });

// Sorting table
const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

// do the work...
document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table');
    Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => table.appendChild(tr) );
})));

// Rende le cards cliccabili
jQuery(document).ready(function($) {
  $(".clickable-row").click(function() {
      window.location = $(this).data("href");
  });
});

// Disabilita il tasto invio
$(document).keypress(
  function(event){
    if (event.which == '13') {
      event.preventDefault();
    }
});



// Task List 
$( document ).ready(function() {
    
    "use strict";
    
    var todo = function() { 
        $('.todo-list .todo-item input').click(function() {
        if($(this).is(':checked')) {
            $(this).parent().parent().parent().toggleClass('complete');
        } else {
            $(this).parent().parent().parent().toggleClass('complete');
        }
    });
    
    $('.todo-nav .all-task').click(function() {
        $('.todo-list').removeClass('only-active');
        $('.todo-list').removeClass('only-complete');
        $('.todo-nav li.active').removeClass('active');
        $(this).addClass('active');
    });
    
    $('.todo-nav .active-task').click(function() {
        $('.todo-list').removeClass('only-complete');
        $('.todo-list').addClass('only-active');
        $('.todo-nav li.active').removeClass('active');
        $(this).addClass('active');
    });
    
    $('.todo-nav .completed-task').click(function() {
        $('.todo-list').removeClass('only-active');
        $('.todo-list').addClass('only-complete');
        $('.todo-nav li.active').removeClass('active');
        $(this).addClass('active');
    });
    
    $('#uniform-all-complete input').click(function() {
        if($(this).is(':checked')) {
            $('.todo-item .checker span:not(.checked) input').click();
        } else {
            $('.todo-item .checker span.checked input').click();
        }
    });
    
    $('.remove-todo-item').click(function() {
        $(this).parent().remove();
    });
    };
    
    todo();
    
    $(".add-task").keypress(function (e) {
        if ((e.which == 13)&&(!$(this).val().length == 0)) {
            $('<div class="todo-item"><div class="checker"><span class=""><input type="checkbox"></span></div> <span>' + $(this).val() + '</span> <a href="javascript:void(0);" class="float-right remove-todo-item"><i class="icon-close"></i></a></div>').insertAfter('.todo-list .todo-item:last-child');
            $(this).val('');
        } else if(e.which == 13) {
            alert('Please enter new task');
        }
        $(document).on('.todo-list .todo-item.added input').click(function() {
            if($(this).is(':checked')) {
                $(this).parent().parent().parent().toggleClass('complete');
            } else {
                $(this).parent().parent().parent().toggleClass('complete');
            }
        });
        $('.todo-list .todo-item.added .remove-todo-item').click(function() {
            $(this).parent().remove();
        });
    });
});