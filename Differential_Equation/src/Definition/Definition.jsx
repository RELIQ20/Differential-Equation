import React from "react";
import './Definition.css';

export default function Definition({formula, title, description, whereDetails,videoUrl}) {
    return (
        <>
            <div className="definition-container">
                <h1 className="title-description">{title}</h1>
                <div className="Top">
                    <h2>Definition</h2>
                    <p className="definition">{description}</p>
                </div>

                <div className="Middle">
                    <h2>Formula</h2>
                    <h3 className="formula" dangerouslySetInnerHTML={{ __html: formula }}/>
                        <p className="where">    
                            <i>where;</i>
                        </p>   

                        <p className="identify">
                            {whereDetails.map((detail, index) => (<span key={index}>{detail}<br /></span>))}
                        </p>
                </div>

                <h2>Want to learn?</h2>
                        <h4>Watch here:</h4>
                        <div className="vidcontainer">
                            <iframe src={videoUrl} 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    referrerpolicy="strict-origin-when-cross-origin" 
                                    allowfullscreen/>
                        </div>
            </div>
        </>);
};