import Page042 from "./Page042";
function Page04() {
  return (
    <div
      className="pricing-section py-5"
      style={{ background: "#eef4f1" }}
    >
      <div className="container">

        <div className="text-center">

          <div className="buttonn d-inline-block mb-3">
            ● PRICING
          </div>

          <h1 className="pricing-title">
            Simple, <span className="trans">transparent</span> pricing
          </h1>

          <p className="subtitle">
            No hidden fees. No surprise overages. Cancel anytime.
          </p>

          <div className="d-flex justify-content-center align-items-center gap-3 mb-5 flex-wrap">

            <span className="mon">Monthly</span>

            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                checked
                readOnly
              />
            </div>

            <span className="anu">Annual</span>

            <span className="save-badge">
              Save 35%
            </span>

          </div>

        </div>

        <Page042 />

      </div>
    </div>
  );
}

export default Page04;