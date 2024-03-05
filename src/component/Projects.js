import React from 'react'
import  Image1  from '../images/E-Commerce.png'
import  Image2  from '../images/CRUD.png'
import  Image3  from '../images/Image Editor.png'
import  Image4  from '../images/Bootstrap_design.png'
import  Image5  from '../images/Design for a company.png'
import  Image6  from '../images/Design for Apple.png'
import  Image7  from '../images/Todo List.png'
import { Container , Row ,Col,Nav ,Tab} from 'react-bootstrap'
import ProjectCard from './ProjectCard'

export default function Projects() {
    const projects =[
        {
            title :"Todo List",
            description:"Todo List For Complete Today's Tasks",
            imageUrl: Image7,
            href: "https://todo-list-three-kohl.vercel.app/"

        },
        {
            title :"E-Commerce",
            description:"An e-commerce website to display products",
            imageUrl: Image1,
            href: "https://engalimohamed.github.io/E-Commerce-/"
        },
        {
            title :"CRUD System",
            description:"Product management system",
            imageUrl: Image2,
            href: "https://engalimohamed.github.io/PROJECT_CRUD_SYSTEM/"
        },
        {
            title :"Image Editor",
            description:"A site for editing photos with filters",
            imageUrl: Image3,
            href: "https://engalimohamed.github.io/Image-Editor/"

        },
        {
            title :"Design Bootstrap ",
            description:"Responsive product display design",
            imageUrl: Image4,
            href:"https://engalimohamed.github.io/Project-Bootstrap/"
        },
        {
            title :"Design for a company",
            description:"Responsive product display design",
            imageUrl: Image5,
            href:"https://engalimohamed.github.io/The-Final-Project/"
        },
        {
            title :"Design for Apple",
            description:"Responsive product display design",
            imageUrl: Image6,
            href:"https://engalimohamed.github.io/Apple-Company/"

        },
    ]
  return (
    <div className='project' id='projects'>
        <Container>
            <Row>
               <Col>
               <h2>My Projects</h2>
               <p>Hello , My Name is Ali Mohamed , i live in Zagazig , This is My Projects...</p>
               <Tab.Container id="projects-taps">

               <Nav  variant="pills" defaultActiveKey="/home"id='pills-tab' className='nav-pills mb-5 justify-content-center align-items-center'>
                <Nav.Item>
                    <Nav.Link className='first_secation' eventKey="first">1st Section</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">2nd Section</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third" >3rd Section</Nav.Link>
                </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project,index)=>{
                                    return(
                                        
                                       <ProjectCard 
                                       key={index}
                                       {...project}/>
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane  eventKey="secand">
                     </Tab.Pane>
                    <Tab.Pane  eventKey="third">Hello , My Name is Ali Mohamed , i live in Zagaziq , This is My Projects...</Tab.Pane>
                </Tab.Content>
                </Tab.Container>
               </Col>
            </Row>
        </Container>
    </div>
  )
}
