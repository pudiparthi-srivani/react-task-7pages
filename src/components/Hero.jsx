function Hero() {
  return (
    <><div className="container" style={{ backgroundColor: '#edf5f3', maxWidth: '100vw' }}>
          <div className="row align-items-center hero-section">

              <div className="col-lg-6 bio">
                  <div className="badge-custom">
                      <span className="star" style={{ color: 'white', backgroundColor: '#0f8b78', borderRadius: '50px', }}>✦</span> Rated{" "}
                      <span>#1 Productivity SaaS</span> of 2024
                  </div>

                  <h1 className="text1">Your workflow,</h1>
                  <h2 className="text2">finally clear.</h2>

                  <p className="paragraph">
                      Clearwave unifies your team's projects, data, and communication into
                      one calm, focused surface. Less noise, more done.
                  </p>

                  <div className="d-flex flex-wrap gap-3 mb-4">
                      <button className="one">Start Free – No Card →</button>
                      <button className="two">▶ See it in action</button>
                  </div>

                  <div className="icons">
                      <div>🏅 SOC 2 Certified</div>
                      <div className="linee"></div>
                      <div>⚡ 99.9% Uptime SLA</div>
                      <div className="linee"></div>
                      <div>🙍‍♂️ 50k+ Teams</div>
                  </div>
              </div>


              <div className="col-lg-6 position-relative">
                  <div className="dashboard">
                      <div className="window-top">
                          <span className="dot red"></span>
                          <span className="dot yellow"></span>
                          <span className="dot green"></span>
                      </div>

                      <h3>Team Performance</h3>

                      <div className="bars">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                      </div>

                      <div className="row g-3">
                          <div className="col-4">
                              <div className="percentage">
                                  <h2>94%</h2>
                                  <p>Task Rate</p>
                                  <p>+12%</p>
                              </div>
                          </div>

                          <div className="col-4">
                              <div className="percentage">
                                  <h2>2.4k</h2>
                                  <p>Active Users</p>
                                  <p>+8%</p>
                              </div>
                          </div>

                          <div className="col-4">
                              <div className="percentage">
                                  <h2>18h</h2>
                                  <p>Saved / week</p>
                                  <p>+24%</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="growth-card">
                      <h2>↑ 34%</h2>
                      <p>Output this week</p>
                  </div>

                  <div className="integration">
                      <div className="icon">✦</div>

                      <div>
                          <h5>New integration</h5>
                          <p>Slack connected · just now</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </>
  );
}

export default Hero;