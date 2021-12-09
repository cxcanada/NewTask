function List({children, ...props}){
    return <ul>{children}</ul>
}

function ListItem({name,children,onClick, ...props}){
    return(
        <li onClick={onClick}>
            {children}
        </li>
    )
}

export {List, ListItem} 