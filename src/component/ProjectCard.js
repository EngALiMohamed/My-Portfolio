import React from 'react'
import { Col } from 'react-bootstrap'
export default function ProjectCard({title, description,imageUrl,href}){
  return (
    <Col size={12} sm={6} md={4}>
        <div className='proj-imgbx'>
          <a href={href} target='_blank'>
              <img src={imageUrl}/>
            <div className='proj-txtx'>
                <h4>{title}</h4>
                <span>{description}</span><br/>
                <span>{"🫱 "}Click Here</span>
            </div>
          </a>
        </div>
    </Col>
  )
}