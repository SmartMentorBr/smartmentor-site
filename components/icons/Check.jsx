export default (props) => {
    const color = props.color
    const width = props.width
    const height = props.height

    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          viewBox="0 0 24 24"
          color='var(--token-5c307a67-6795-4048-adfc-b48036964c11, rgb(44, 152, 240)) /* {"name":"Azul"} */'
          style={{
            userSelect: "none",
            width: {width},
            height: {height},
            display: "inline-block",
            fill: "currentColor",
            flexShrink: 0,
          }}
          {...props}
        >
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
    )
}

