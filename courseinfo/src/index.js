import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    console.log(props)
    return <h1>{props.course}</h1>
}

const Part = (props) => {
    console.log(props)
    return <p> {props.part}, number of exercises {props.ex_no} </p>
}

const Content = (props) => {
    console.log(props)
    return (
        <>
            < Part part={props.parts[0].name} ex_no={props.parts[0].exercises} />
            < Part part={props.parts[1].name} ex_no={props.parts[1].exercises} />
            < Part part={props.parts[2].name} ex_no={props.parts[2].exercises} />
        </>
    )
}

const Total = (props) => {
    console.log(props)
    return <p> Total number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}  </p>
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
