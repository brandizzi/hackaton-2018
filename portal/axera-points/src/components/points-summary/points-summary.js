import JSXComponent from 'metal-jsx';

export default class AppComponent extends JSXComponent {
	render() {
        const {points} = this.props;

        return (
            <div class="sheet sheet-summary">
                <p>Total Score</p>
                <h1>{points}</h1>
                <a class="link" href="#">
                    See Purchase Summary
                    <svg id="caret" viewBox="9 7 6 10" width="100%" height="100%">
                        <polyline
                            fillRule="evenodd" 
                            fill="none" 
                            points="10 8 14 12 10 16" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            stroke="currentColor">
                        </polyline> 
                    </svg>
                </a>
            </div>
        );
    }
}