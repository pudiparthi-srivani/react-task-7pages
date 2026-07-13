

function Page031() {
  return (
    <>
    <section className="platform-section py-5">
      <div className="container">

        <div className="platform-section py-5">

    <div className="container">

      
        <div className="text-center mb-5">
            <span className="badge-pill">• PLATFORM FEATURES</span>

            <h1 className="main-title mt-3">
                Built for <span>clarity</span><br/>
                at every scale
            </h1>

            <p className="subtitle">
                Every feature is designed to reduce friction and surface what matters.
                No bloat, no configuration maze.
            </p>
        </div>

        <div className="row align-items-center g-5 mb-5">

            <div className="col-lg-6">
                <p className="feature-label">01 — UNIFIED DASHBOARD</p>

                <h2 className="feature-title">
                    Every metric, one calm surface
                </h2>

                <p className="feature-text">
                    Pull data from any source into a single composable view.
                    Share live dashboards with stakeholders - no exports, no screenshots.
                </p>

                <ul className="feature-list">
                <li className="feature-item"> <span className="tick">✓</span> Drag-and-drop workflows  </li>
                <li className="feature-item"> <span className="tick">✓</span> Real-time data sync across all sources  </li>
                <li className="feature-item"> <span className="tick">✓</span> Role-based sharing with granular permissions  </li>
                </ul>
            </div>

            <div className="col-lg-6">
                <div className="dashboard-card">

    <div className="top-cards">

        <div className="mini-card">
            <p className="card-title">Monthly Revenue</p>
            <h3>$84.2k</h3>

            <div className="progress-bar">
                <div className="progress-fill"></div>
            </div>
        </div>

        <div className="mini-card">
            <p className="card-title">Active Users</p>
            <h3>12,481</h3>

            <div className="progress-bar">
                <div className="progress-fill"></div>
            </div>
        </div>

    </div>

    <div className="activity-cardd" style={{backgroundColor:'white',borderRadius:'10px',height:'200px'}}>

        <h4 style={{marginLeft:'20px',fontSize:'13px',color:'gray',fontWeight:'bold'}}>Recent Activity</h4>

        <div className="activity-row">
            <span>Q3 Report synced</span>
            <button className="status done">Done</button>
        </div>

        <div className="activity-row">
            <span>Team review pending</span>
            <button className="status active">Active</button>
        </div>

        <div className="activity-row">
            <span>Analytics export</span>
            <button className="status queued">Queued</button>
        </div>

    </div>

</div>
            </div>

        </div>

       
        <div className="row align-items-center g-5 mb-5">

            <div className="col-lg-6 order-lg-2">
                <h2 className="feature-titlle">
                    Routines that run <span>themselves</span>
                </h2>

                <p className="feature-text">
                    Build automation flows with natural language.Clearwave understands your intent and suggests the next step - no flowchart diagrams needed.
                </p>

                <ul className="feature-list">
                <li className="feature-item"> <span className="tick">✓</span> Natural language automation builder  </li>
                <li className="feature-item"> <span className="tick">✓</span> 500+ per-build trigger templates </li>
                <li className="feature-item"> <span className="tick">✓</span> Full audit trail every action  </li>
                </ul>
            </div>

            <div className="col-lg-6 order-lg-1">
                <div className="automation-box"style={{backgroundColor:'#eef6f4'}}>
                 <div style={{backgroundColor:'white',padding:'10px',borderRadius:'10px'}}> 
                <div className="workflow-item d-flex justify-content-between align-items-center mb-2">
        <span>Weekly digest → Slack</span>
        <span className="badge running">Running</span>
    </div>

    <div className="workflow-item d-flex justify-content-between align-items-center mb-2">
        <span>Lead scored → Notify sales</span>
        <span className="badge running">Running</span>
    </div>

    <div className="workflow-item d-flex justify-content-between align-items-center mb-2">
        <span>Invoice due → Alert CFO</span>
        <span className="badge activee">Active</span>
    </div>

    <div className="workflow-item d-flex justify-content-between align-items-center mb-3">
        <span>Report sync → Drive</span>
        <span className="badge paused">Paused</span>
        </div>  
    </div>

   

    <div className="row g-3">

        <div className="col-md-8" style={{height:'120px',marginTop:'50px'}}>
            <div className="bg-white rounded-4 p-3 h-100 metric-card" style={{width:'280px'}}>

                <p className="small text-secondary mb-2">
                    Hours Saved This Month
                </p>

                <h2 className="fw-bold">148h</h2>

                <div className="progress mt-3" style={{ height: "4px" }}>
                    <div className="progress-bar custom-progress" style={{width:'80%'}}>
                </div>

            </div>
        </div>

        <div className="col-md-4">
            <div className="bg-white rounded-4 p-3 h-100 twentyfour">

                <p className="small text-secondary mb-2">
                    Flows
                </p>

                <h2 className="fw-bold" style={{fontSize:'20px',height:'50px'}}>24</h2>

            </div>
        </div>

    </div>

</div>
</div>
            </div>

        </div>

      </div>
      </div>
      </div>
    </section>
    </>
  );
}

export default Page031;