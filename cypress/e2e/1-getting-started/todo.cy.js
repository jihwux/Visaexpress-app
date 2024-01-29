// visa_application_spec.js

describe("Visa Application Form Auto-Fill Test", () => {
  it("should auto-fill the entire form", () => {
    // Visa Application 페이지로 이동
    cy.visit("http://localhost:3000/visaapplication");

    // 모든 입력 필드 선택 후 무작위 텍스트로 채우기
    cy.get("input").each(($el, index, $list) => {
      if ($el.attr("type") === "text") {
        cy.wrap($el).type("Test Text");
      } else if ($el.attr("type") === "email") {
        cy.wrap($el).type("test@example.com");
      } else if ($el.attr("type") === "number") {
        cy.wrap($el).type("12345");
      }
      // 필요하다면 다른 타입의 input에 대해서도 처리를 추가할 수 있습니다.
    });

    // 모든 셀렉트 드롭다운 메뉴에 무작위 옵션 선택하기
    cy.get("select").each(($el, index, $list) => {
      cy.wrap($el)
        .children("option")
        .then(($options) => {
          const randomIndex = Math.floor(Math.random() * $options.length);
          cy.wrap($el).select($options.eq(randomIndex).val());
        });
    });

    // 모든 체크박스 체크하기
    cy.get('input[type="checkbox"]').check();

    // 모든 라디오 버튼 중 무작위로 하나를 선택하기
    cy.get('input[type="radio"]').then(($radios) => {
      cy.wrap($radios).check([
        $radios[Math.floor(Math.random() * $radios.length)].value,
      ]);
    });

    // 폼 제출
    cy.get("form").submit();
  });
});
