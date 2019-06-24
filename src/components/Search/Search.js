

import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

export class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            showList: false,
            hoveredResultIndex: null,
            input: props.initialSearch || ''
        };

        this.inputHandler = this.inputHandler.bind(this);
        this.documentClickHandler = this.documentClickHandler.bind(this);
        this.keyboardHandler = this.keyboardHandler.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.documentClickHandler);
        document.addEventListener('keydown', this.keyboardHandler);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.documentClickHandler);
        document.removeEventListener('keydown', this.keyboardHandler);


    }

    documentClickHandler(e) {
        // close the search result list on clicking anywhere on page except the search box
        // also reset the hovered index
        if (e.target.id === 'searchInp') { return; }
        this.setState({ showList: false, hoveredResultIndex: null });
    }

    keyboardHandler(e) {
        // handle keyboard events only when search input is in focus which is checked by showList, ignore otherwise

        if (this.state.showList) {
            // on keyUp and keydown events change the highlighted search item
            // on enter key event perform a search based on wheather enter is pressed on hovered item
            // or pressed after writing some text in input 

            if (e.key === 'ArrowDown') {
                this.setState((state) => {
                    const index = state.hoveredResultIndex != null ? state.hoveredResultIndex === state.list.length - 1 ? state.hoveredResultIndex : state.hoveredResultIndex + 1 : 0;
                    return {
                        hoveredResultIndex: index,
                    };
                });
            } else if (e.key === 'ArrowUp') {
                this.setState((state) => {
                    const index = state.hoveredResultIndex != null ? state.hoveredResultIndex === 0 ? state.hoveredResultIndex : state.hoveredResultIndex - 1 : 0;
                    return {
                        hoveredResultIndex: index,
                    };
                });
            } else if (e.key === 'Enter') {
                if (this.state.hoveredResultIndex != null) {
                    this.onSearch(this.state.list[this.state.hoveredResultIndex].name);
                } else {
                    this.onSearch(this.state.input);
                }
            }
        }
    }


    inputHandler(e) {
        const search = e.target.value;
        this.setState({
            input: search,
            list: search.trim() !== '' ? this.props.list.filter(x => x.name.toLowerCase().includes(search.toLowerCase().trim())) : [],
        });
    }


    onSearch(search) {
        if (search && search.trim() !== '') {
            this.props.onSearch(search);
        }
    }

    render() {

        // decide wheather search list shud be visible or hidden
        const resultClasses = 'searchResults ' +
            (this.state.showList && this.state.list.length > 0 ? 'searchResultsShow' : 'searchResultsHide');

        return (
            <div style={{ textAlign: "center", padding: '5px' }}>
                <form className="form">
                    <div className="row">
                        <div className="col-12">
                            <input type="text" className="searchInput" id="searchInp" value={this.state.input}
                            placeholder="Search Avenger"
                                autoComplete="off"
                                onChange={this.inputHandler}
                                onFocus={(e) => this.setState({ showList: true })}
                            ></input>
                        </div>
                    </div>
                    <ul className={resultClasses}>
                        {this.state.list.map((a, i) => (
                            <SearchResultItem key={a.id}
                                hovered={i === this.state.hoveredResultIndex}
                                item={a.name} matchedPart={this.state.input}
                                onClick={(e) => { this.onSearch(a.name) }} />
                        ))}
                    </ul>
                </form>

            </div>
        );
    }
};

Search.propTypes = {
    currentSearch: PropTypes.string,
    list: PropTypes.array.isRequired
};


/**
 * SearchResultItem renders the individul search result string with the matched part in bold
 * @param {string} item : search result
 * @param {string} matchedPart : part of serch result that is to be rendered in bold
 */
const SearchResultItem = ({ hovered, item, matchedPart, onClick }) => {
    const trimmedMatch = matchedPart.trim();
    const strt = item.toLowerCase().indexOf(trimmedMatch.toLowerCase()),
        end = strt + trimmedMatch.length;
    return (
        <li className={'searchResultItem ' + (hovered ? 'hoveredSearchResultItem' : '')} onClick={onClick}>
            {item.slice(0, strt)}<b>{item.slice(strt, end)}</b>{item.slice(end)}
        </li>
    );

};
