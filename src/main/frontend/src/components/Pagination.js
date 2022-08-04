function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <nav aria-label="Page navigation example">
      <div className="d-flex justify-content-center">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              aria-label="Previous"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          {Array(numPages)
            .fill()
            .map((_, i) => (
              <li className="page-item" key={i + 1}>
                <button
                  className="page-link"
                  key={i + 1}
                  onClick={() => setPage(i + 1)}
                  aria-current={page === i + 1 ? "page" : null}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          <li className="page-item">
            <button
              className="page-link"
              aria-label="Next"
              onClick={() => setPage(page + 1)}
              disabled={page === numPages}
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Pagination;
