// visa_application_spec.js

describe("Visa Application Form Test", () => {
  it("should fill out visa form 1", () => {
    // 애플리케이션의 URL로 이동
    cy.visit("http://localhost:3000/your-visa-form-url");

    // Form 1 필드에 값을 입력
    cy.get('input[name="form1Field1"]').type("John Doe");
    cy.get('input[name="form1Field2"]').type("123456789");
    // 나머지 필드들에 대해서도 같은 방식으로 값을 입력합니다.

    // 필요한 데이터를 모두 입력한 후, 다음 버튼이나 제출 버튼을 클릭
    cy.get('button[type="submit"]').click();

    // 다음 폼, 예를 들어 Form 2가 제대로 로드되었는지 검증
    cy.url().should("include", "/next-form-url"); // 실제 다음 폼의 URL로 변경
  });

  // Form 2, Form 3 등에 대해서도 같은 패턴으로 테스트 케이스를 작성합니다.
});
