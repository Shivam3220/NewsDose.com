import React, { Component } from 'react'



export default class NewsItem extends Component {
 
    
  render() {
      let {title,dec,img,url,LastUpdate}=this.props;
    return (
      <div>
     <div>
         <div className="card mb-3  border-success">
            <div className="row g-0 p-2">
                <div className="col-md-4">
                <img src={img} className="" alt="..." style={{width:"20rem", height: "15rem",borderRadius:"15px"}}/ >
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{dec}</p>
                    <p className="card-text"><small className="text-muted">Last updated:  {LastUpdate}</small></p>
                    <a className="btn btn-success btn-sm " role="button" aria-disabled="true" href={url} target="_blank"  rel="noreferrer" >Read More</a>
                </div>
             
                </div>
            </div>
        </div>
    </div>
      </div>
    )
  }
}
