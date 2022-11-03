import styles from "/styles/titleAnimation.module.css"

export default function Title (props) {
    return <div className={styles.container} style={props.style}>{props.title}</div>
}