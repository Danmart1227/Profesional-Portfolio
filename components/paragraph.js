import styles from "/styles/paragraph.module.css"

export default function Paragraph (props) {
    return <p className={styles.text} style={props.style}>{props.text}</p>
}