function Page042(){
    return(
        <>
        <div className="row g-4 helloooo">
            <div className="col-lg-4">
            <div className="card pricing-card h-100 border-0">
            <div className="card-body d-flex flex-column">
            <h6 className="plan-label">Starter</h6>
            <div className="price mb-3">
            <span className="currency">$</span>
            <span className="amount">20</span>
            <span className="per">/ mo</span>
            </div>

            <p className="desc">
            For individuals and small teams getting started with structured workflows.
            </p>
            <hr />
            <ul className="features list-unstyled text-start">
            <li><span className="tick">✓</span> Up to 5 team members</li>
            <li><span className="tick">✓</span> 10 active dashboards</li>
            <li><span className="tick">✓</span> Basic automations (50/mo)</li>
            <li><span className="tick">✓</span> 7-day data history</li>
            <li><span className="tick">✓</span> Email support</li>
            </ul>
            <button className="btn btn-outline-dark mt-auto">Start Free Trial</button>
            </div>
            </div>
            </div>




                
                <div className="col-lg-4 total" >
                <div className="card pricing-card1 featured h-100 border-0" style={{backgroundColor:'black'}}>
                <div className="card-body d-flex flex-column">
                <span className="popular-tag"> MOST POPULAR</span>
                <h6 className="plan-label mt-3">PROFESSIONAL</h6>
                <div className="price mb-3">
                <span className="currency">$</span>
                <span className="amount">60</span>
                <span className="per">/ mo</span>
                </div>
                <p className="desc">
                For growing teams that need powerful automation and advanced reporting.
                </p>
                <hr style={{color:'#ebf8f4'}}/>
                <ul className="features list-unstyled text-start middles">
                <li><span className="tick2">✓</span>Up to 25 team members</li>
                <li><span className="tick2">✓</span> Unlimited dashboards</li>
                <li><span className="tick2">✓</span> Advanced automations</li>
                <li><span className="tick2">✓</span> 90-day data history</li>
                <li><span className="tick2">✓</span> Priority chat support</li>
                <li><span className="tick2">✓</span> Mobile app access</li>
                </ul>
                <button className="btn  bbb btn-dark mt-auto" style={{background:' #037969'}}>Start Free Trial</button>
                </div>
                </div>
            </div>







            <div className="col-lg-4">
                <div className="card pricing-card h-100 border-0">

                    <div className="card-body d-flex flex-column">

                        <h6 className="plan-label">
                            Enterprise
                        </h6>

                        <div className="price mb-3">
                            <span className="currency">$</span>
                            <span className="amount">150</span>
                            <span className="per">/ mo</span>
                        </div>

                        <p className="desc">
                            For large organizations with custom requirements and compliance needs.
                        </p>

                        <hr />

                        <ul className="features list-unstyled text-start">
                            <li><span className="tick">✓</span> Unlimited members</li>
                            <li><span className="tick">✓</span> Custom integrations & API</li>
                            <li><span className="tick">✓</span> SSO & permissions</li>
                            <li><span className="tick">✓</span> Unlimited data history</li>
                            <li><span className="tick">✓</span> Dedicated success manager</li>
                            <li><span className="tick">✓</span> SOC 2 compliance reports</li>
                        </ul>

                        <button className="btn btn-outline-dark mt-auto">
                            Contact Sales
                        </button>

                    </div>
                </div>
            </div>

        </div>
        
        
        
        
        
        </>
    );
}
  export default Page042;