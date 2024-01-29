$(function () {
  const $result = $(".result");
  const $oldCalculation = $(".old-calculation");

  $("[data-number]").click(function () {
    const v = $(this).text();
    const currentResult = $result.text();
    if (v === "." && currentResult.includes(".")) return;
    $result.text(currentResult + v);
  });

  $("[data-operation]").click(function () {
    const v = $(this).text();

    if ($oldCalculation.text() === "") {
      $oldCalculation.text($result.text() + " " + v);
    } else {
      const lastCalculationResult = eval(
        $oldCalculation.text() + $result.text(),
      );
      $oldCalculation.text(lastCalculationResult + " " + v);
    }

    $result.text("");
  });

  $("#equal").click(function () {
    const r = $result.text();
    const oldV = $oldCalculation.text();
    const finalResult = eval(oldV + r);
    $result.text(finalResult);
    $oldCalculation.text("");
  });

  $("[data-clear]").click(function () {
    $result.text("");
    $oldCalculation.text("");
  });
});
