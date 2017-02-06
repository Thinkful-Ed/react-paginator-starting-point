import React from 'react';

export default function Paginator(props) {
    const {totalPages, currentPage} = props;

    const pages = [];
    for (let i=0; i<totalPages; i++) {
        if (i === currentPage) {
            pages.push(<span key={i} className="paginator-page active">{i}</span>);
            continue;
        }

        pages.push(
            <a key={i} className="paginator-page" href={`/page/${i}`}>{i}</a>
        );
    }

    let prev;
    if (currentPage > 0) {
        prev = <a className="paginator-prev" href={`/page/${currentPage - 1}`}>&lt;</a>;
    }

    let next;
    if (currentPage < totalPages - 1) {
        next = <a className="paginator-next" href={`/page/${currentPage + 1}`}>&gt;</a>;
    }

    return (
        <nav className="paginator">
            {prev}
            {pages}
            {next}
        </nav>
    );
}
