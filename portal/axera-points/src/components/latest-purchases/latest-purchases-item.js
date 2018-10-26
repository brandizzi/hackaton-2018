import JSXComponent, {Config} from 'metal-jsx';

export default class AppComponent extends JSXComponent {
    static PROPS = {
        name: Config.string(),
        date: Config.string(),
        points: Config.string(),
        imageUrl: Config.string()
    };
    
	render() {
        const {name, points, imageUrl, date} = this.props;
        return (
            <tr>
                <td>
                    <div class="sticker sticker-secondary">
                        <span class="inline-item">
                            <svg class="lexicon-icon" id="categories" viewBox="0 0 512 512" width="100%" height="100%">
                                <path class="lexicon-icon-body" fill="none" d="M491.7,262.6l-1-1.2l-5.2-5.2c32.9-35,35.5-86.1,6.2-121.6l-1-1.2l-96.6-96.6C364.9,7.7,333.2,1.3,316.9,0.1  L315.8,0H85.6C63,0,41.5,9.1,25.2,25.6C8.9,42,0,63.5,0,86v340.3c0,22.7,9,44.2,25.3,60.5C41.5,503,63,512,85.6,512h0l223.1-0.1h1.2  l1.2-0.1c19.4-1.5,56.4-8.5,86.2-39.5l87.4-87.4l0.7-0.7C518.3,349.3,521,298.1,491.7,262.6z M340.5,212.5  C335,218,327.7,221,320,221c-15.5,0-29-13.5-29-29c0-16,13-29,29-29c7.8,0,15,3,20.5,8.5c5.5,5.5,8.5,12.8,8.5,20.5  C349,199.8,346,207,340.5,212.5z"></path>
                                <path class="lexicon-icon-outline" d="M320,256c17.1,0,33.2-6.6,45.3-18.7c12.1-12.1,18.7-28.2,18.7-45.3c0-34.1-29.8-64-64-64c-35.3,0-64,28.7-64,64  c0,17.1,6.7,33.2,18.7,45.3C286.8,249.4,302.9,256,320,256z M320,163c7.8,0,15,3,20.5,8.5c5.5,5.5,8.5,12.8,8.5,20.5  c0,7.8-3,15-8.5,20.5C335,218,327.7,221,320,221c-15.5,0-29-13.5-29-29C290.9,176,304,163,320,163z"></path>
                                <path class="lexicon-icon-outline" d="M0,426.3c0,22.7,9,44.2,25.3,60.5C41.5,503,63,512,85.6,512h0l223.1-0.1h1.2l1.2-0.1c19.4-1.5,56.4-8.5,86.2-39.5l87.4-87.4  l0.7-0.7c33-35,35.6-86.2,6.3-121.7l-1-1.2l-5.2-5.2c32.9-35,35.5-86.1,6.2-121.6l-1-1.2l-96.6-96.6C364.9,7.7,333.2,1.3,316.9,0.1  L315.8,0H85.6C63,0,41.5,9.1,25.2,25.6C8.9,42,0,63.5,0,86 M85.6,320c-5.6,0-10.8-2.2-15.1-6.5c-4.3-4.3-6.5-9.5-6.5-15.2V256V86.1  C64,74.5,74.3,64,85.6,64h227.6c7.7,0.8,21.7,4.2,35.6,18.1l94.3,94.3c7.7,10.3,6.1,24.8-4,35.8l-87.2,87.2l-0.5,0.5  c-14.5,15.2-33.3,19.2-43.9,20.1L85.6,320 M85.6,448c-5.6,0-10.8-2.2-15.1-6.5c-4.3-4.3-6.5-9.5-6.5-15.2v-45.1  c7,1.8,14.2,2.8,21.6,2.8h0l223.1-0.1h1.2l1.2-0.1c19.4-1.5,56.4-8.5,86.2-39.5l42.9-42.9l2.9,2.9c7.7,10.3,6.1,24.8-4,35.8  l-87.2,87.2l-0.5,0.5c-14.5,15.2-33.3,19.2-43.9,20.1L85.6,448"></path>
                            </svg>
                        </span>
                    </div>
                </td>
                <td class="table-cell-expand">
                    <div class="table-title">Product</div>
                    <div>{name}</div>
                </td>
                <td class="table-cell-expand">
                    <div class="table-title">Score</div>
                    <div>{points}</div>
                </td>
                <td class="table-cell-expand">
                    <div class="table-title text-right">Purchase Date</div>
                    <div class="text-right">{date}</div>
                </td>
            </tr>
        );
    }
}