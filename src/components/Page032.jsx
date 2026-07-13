function Page032() {
  return (
    <>
      <section className="platform-section py-5">
        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <p className="feature-label part3">03 — TEAM COLLABORATION</p>

              <h2 className="feature-titlee">
                Comments, context, and <span>clarity</span>
              </h2>

              <p className="feature-textt">
                Annotate anything, assign tasks inline, and resolve conversations without switching tabs. The work and the disucssion stay together.
              </p>

              <ul className="feature-list">
                <li className="feature-item"> <span className="tick">✓</span> Inline comments on any data points </li>
                <li className="feature-item"> <span className="tick">✓</span> Threaded task assignments </li>
                <li className="feature-item"> <span className="tick">✓</span> Real-time presence and live cursors</li>
                </ul>
            </div>

            <div className="col-lg-6">
              <div className="team-card"style={{backgroundColor:'#eef6f4'}}>

                <div className="row g-3 mb-3">

                  <div className="col-7">
                    <div className="mini-box">
                      <p className="mini-title">Online Now</p>

                      <div className="avatars">
                        <span className="avatar a">A</span>
                        <span className="avatar b">K</span>
                        <span className="avatar c">M</span>
                        <span className="count">+5</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-5">
                    <div className="mini-box">
                      <p className="mini-title">Open Tasks</p>
                      <h2 className="task-count">37</h2>
                    </div>
                  </div>

                </div>

                <div className="comments-box">

                  <h6 className="comment-title">Recent Comments</h6>

                  <div className="comment-row">
                    <span>Alex → Q3 chart updated</span>
                    <span className="status resolved">Resolved</span>
                  </div>

                  <div className="comment-row">
                    <span>Kim → Review needed</span>
                    <span className="status open">Open</span>
                  </div>

                  <div className="comment-row">
                    <span>Maya → Approved &amp; shipped</span>
                    <span className="status done">Done</span>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="stats-section py-5"style={{backgroundColor:'#eef5f3',marginTop:'-10px'}}>
        <div className="container">

          <div className="row text-center g-4">

            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <div className="stat-line mx-auto mb-3"></div>

                <h2 className="stat-number">
                  17<span>k+</span>
                </h2>

                <h5>Teams Worldwide</h5>

                <p>Across 80+ countries</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <div className="stat-line mx-auto mb-3"></div>

                <h2 className="stat-number">
                  11<span>%</span>
                </h2>

                <h5>Avg. Productivity Gain</h5>

                <p>Measured in first 30 days</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <div className="stat-line mx-auto mb-3"></div>

                <h2 className="stat-number">
                  34.3<span>%</span>
                </h2>

                <h5>Uptime SLA</h5>

                <p>Guaranteed and monitored</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <div className="stat-line mx-auto mb-3"></div>

                <h2 className="stat-number">
                  6<span>h</span>
                </h2>

                <h5>Saved Per Team Weekly</h5>

                <p>On average across all plans</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default Page032;