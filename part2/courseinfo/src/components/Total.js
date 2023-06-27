const Total = ({ parts }) => {
    const sum = parts.reduce((total, item) => total + item.exercises, 0)

    return (
        <p>Number of exercises {sum}</p>
    )
}

export default Total