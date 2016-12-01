var rootElement =
    React.createElement('div', {},
        React.createElement('h1', {}, "Decker"),
        React.createElement('h1', {}, "Contacts"),
        React.createElement('ul', {},
            React.createElement('li', {},
                React.createElement('h2', {}, "Cybersecurity Blogger"),
                React.createElement('a', {href: 'mailto:edsnowden@fuckkk.ru'}, 'here')
            ),
            React.createElement('li', {},
                React.createElement('h2', {}, "Ex-Corp Professor"),
                React.createElement('a', {href: 'mailto:bruceschneier@schneieronsecurity.com'}, 'here')
            )
        )
    );

ReactDOM.render(rootElement, document.getElementById('react-app'));