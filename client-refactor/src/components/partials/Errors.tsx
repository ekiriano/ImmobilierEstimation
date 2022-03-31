interface IProps {
    errors: {
        [key: string]: string
    }
}

export const Errors = (props: IProps) => {
    const values = [];

    for(const error in props.errors) {
        values.push(props.errors[error] )
    }

    return (
        <>
            {values.map(value => (
                <p className="text-sm text-red-500 mt-1 my-5">{value}</p>
            ))}
        </>
    )
}