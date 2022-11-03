import styles from "/styles/subtitle.module.css"

export default function Subtitle (props) {
    return <div className={styles.container}>{props.subtitle}</div>
}