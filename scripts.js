
// Grafico Lineare
var xValues = ['Lunedì','Martedì','Mercoledì','Giovedì','Venerdì','LuneSabatodì','Domenica'];

new Chart("myChartline", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [30,50,23,101,55,60,8],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});

// Grafico a doughnut
var xValues = ["Category", "Category", "Category", "Category", "Category"];
var yValues = [55, 49, 44, 24, 15];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChartpie1", {
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



//   Seconda tabella
// $(document).ready(function () {
//     $('#dtBasicExample').DataTable();
//     $('.dataTables_length').addClass('bs-select');
//   });

