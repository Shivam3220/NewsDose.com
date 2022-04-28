import React, { Component } from 'react'
import NewsItem from './NewsItem'
import noImage from './noImage.jpg'
import PropTypes from 'prop-types'




export default class NewsBox extends Component {
  static defaultProps = {
   
    category: 'general',
  }
  static propTypes = {
     
    category: PropTypes.string,
  }
    constructor(props){
        super(props);
        this.state={articles:[],category:"",page:1,button:false};
        
        
      }
      
      update(){
        let apiKey="f6290f28a9484c84a3e9fe3668193702";
     
    //console.log(apiKey);
     let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${apiKey}&page=${this.state.page}`;
     //console.log(url);
     fetch(url)
     .then((response)=> response.json())
     .then((data)=>{
       // console.log(data.totalResults);
       let news= data.articles;
       let pg=Math.ceil(data.totalResults/20)
       this.setState({articles:news,button:this.state.page>=pg})
       
        

   })

   }            
    next=()=>{
 
      this.setState((preState)=>({
        page:preState.page+1
      }),()=>{
        //console.log(this.state.page)
        this.update()
      })
     
    }
    previous= ()=>{
      this.setState((preState)=>({
        page:preState.page-1
      }),()=>{
        //console.log(this.state.page)
        this.update()
      })
    }
                
  componentDidMount(){
    this.setState(()=>({
     category:this.props.category
    }),()=>{
      //console.log(this.state.page)
      this.update()
    })
    }
    render() {
    // console.log(this.state);

      
        return (
        <>
         <div className="container">
          <h1 className='text-center my-3'>Top headlines-{this.state.category}</h1>
        </div>
      
       {this.state.articles.map((Element)=>{
         return<div className='container' key={Element.url}>
         <NewsItem title={Element.title} dec={Element.description} img={!Element.urlToImage?noImage:Element.urlToImage} url={Element.url} LastUpdate={Element.publishedAt}/>
         </div>
       })}
     <div className='container d-flex justify-content-between my-3'>
     <button disabled={this.state.page<=1} type="button" className="btn btn-success" onClick={this.previous}>&#8592;Previous</button>
     <button disabled={this.state.button} type="button" className="btn btn-success" onClick={this.next}> Next 	&#8594;</button>
     </div>
        </>
    )
  }
}
