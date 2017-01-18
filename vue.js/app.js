Vue.config.devtools = true;

var app = new Vue({
  el: "#app",
  data: {
    title: "Contas a pagar",
    menus: [
      {id: 0, name: "Listar contas"},
      {id: 1, name: "Criar conta"}
    ],
    bills: [
      {date_due: '20/08/2016', name: 'Conta', value: 70.30 , done: 1},
      {date_due: '20/08/2016', name: 'Conta', value: 70.00 , done: 0},
      {date_due: '20/08/2016', name: 'Conta', value: 70.00 , done: 0},
      {date_due: '20/08/2016', name: 'Conta', value: 70.00 , done: 0},
      {date_due: '20/08/2016', name: 'Conta', value: 70.00 , done: 0},
      {date_due: '20/08/2016', name: 'Conta', value: 70.00 , done: 0},
    ]
  },
  computed: {
    status: function() {
      var count = 0;
      for(var i in this.bills) {
        if (!this.bills[i].done) {
          count ++;
        }
      }

      return !count ? "Nenhuma conta a pagar": "Existem " + count + " contas a serem pagas";
    }
  },
  methods: {
    showView: function(number) {
      console.log(number);
    }
  }
});
