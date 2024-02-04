import React from 'react'

function Footer({
    websiteName,

}) {
    const year = new Date().getFullYear();
    return (
        <div>
            <footer className="bg-white py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto"><div className="small m-0">Copyright &copy; {websiteName} {year}</div></div>
                </div>
            </div>
        </footer>
        </div>
    )
}

export default Footer
