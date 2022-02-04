//MAIN SCRIPT
const script = () => {
  // INT TO CURRENCY - FUNCTION
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  //VALIDATE INPUT
  const isValid = (item) => {
    if (item.length == 0) {
      return false;
    } else {
      return true;
    }
  };

  // GET DATA FROM INPUT
  const user_input = document.getElementById("cantity").value;
  const valor_producto = 820000;
  if (isValid(user_input)) {
    //FUNCTION INT TO PER
    const percentage = (num, per) => {
      return (num / 100) * per;
    };
    const intToCurrency = (int) => {
      return formatter.format(int, "COP");
    };
    let valor_de_compra = user_input * valor_producto;
    document.getElementById("tan").style.display = "block";
    document.getElementById("valor_de_compra").value =
      intToCurrency(valor_de_compra);
    document.getElementById("valor_total").value =
      intToCurrency(valor_de_compra);
    let percentage_;
    if (valor_de_compra >= 1640000 && valor_de_compra <= 3280000) {
      document.getElementById("valor_de_descuento").value = "15%";
      percentage_ = percentage(valor_de_compra, 15);
    } else if (valor_de_compra > 3280000 && valor_de_compra <= 6560000) {
      document.getElementById("valor_de_descuento").value = "25%";
      percentage_ = percentage(valor_de_compra, 25);
    } else if (valor_de_compra > 6560000 && valor_de_compra <= 9840000) {
      document.getElementById("valor_de_descuento").value = "35%";
      percentage_ = percentage(valor_de_compra, 35);
    } else if (valor_de_compra > 9840000) {
      document.getElementById("alert").style.display = "block";
      document.getElementById("valor_de_descuento").value = "0%";
    }
    if (!isNaN(percentage_)) {
      document.getElementById("alert").style.display = "none";
      percentage_ = intToCurrency(percentage_, "COP");
      document.getElementById("valor_total").value = percentage_;
    } else {
      document.getElementById("alert").style.display = "block";
      document.getElementById("valor_de_descuento").value = "0%";
    }
  } else {
    document.getElementById("error").style.display = "block";
  }
};

//FUNCTION TO CLEAN DATA
const clean = () => {
  //DOM MANIPULATION
  document.getElementById("cantity").value = "";
  document.getElementById("valor_de_compra").value = "";
  document.getElementById("valor_de_descuento").value = "";
  document.getElementById("valor_total").value = "";
  document.getElementById("alert").style.display = "none";
  document.getElementById("tan").style.display = "none";
  document.getElementById("error").style.display = "none";
};
