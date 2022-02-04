const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validate = () => {
  const $result = $("#result");
  const email = $("#email").val();
  $result.text("");

  if (!validateEmail(email)) {
    $result.css('color', 'red');
    $result.text(email + " is not a valid email");
  }
  return false;
};

$("#email").on("input", validate);

const validateAge = () => {
  const $result = $("#result1");
  const input_age = $("#age").val();
  $result.text("");
    if (isNaN(input_age)) {
        $result.css('color', 'red');
        $result.text(`${input_age} is not a number`);
    } else if (input_age < 18 || input_age > 99){
        $result.css('color', 'red');
        $result.text(`${input_age} is not a valid age. Only from 18 to 80.`);
    }
};

$("#age").on("input", validateAge);
