import styles from './Paginator.module.css'

let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 15) {
            pages.push(i)
        }
    }

    return (
        <div>
            {pages.map(p => {
                return <span className={currentPage === p && styles.selectedPage} onClick={() => { onPageChanged(p) }}>{p}</span>
            })}
        </div>
    )
}

export default Paginator