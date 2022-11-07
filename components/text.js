import styles from '../styles/text.module.css'

export default function Text(props) {
    return(
        <h2 className={styles.text} style={props.style}>{props.text}</h2>
    )
}