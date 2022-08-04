import './testPage.css';
export default function TestPage() {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    Rebel-Foods
                </div>
                <div className="card-body">
                    <h5 className="card-title">Authentication Required</h5>
                    <p className="card-text">Login/Register to land on the Management System of Rebel Foods.</p>
                    <div id="authbox">
                    <a href="./loginPage.js" id='loginbtn' className="btn btn-primary">Login</a>
                    <a href="./registerPage.js" className="btn btn-primary">Register</a>
                    </div>
                </div>
            </div>
        </>
    );
}