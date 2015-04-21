!function(a,b,c,d,e,f,g,h,i){function j(a){var b,c=a.length,e=this,f=0,g=e.i=e.j=0,h=e.S=[];for(c||(a=[c++]);d>f;)h[f]=f++;for(f=0;d>f;f++)h[f]=h[g=r&g+a[f%c]+(b=h[f])],h[g]=b;(e.g=function(a){for(var b,c=0,f=e.i,g=e.j,h=e.S;a--;)b=h[f=r&f+1],c=c*d+h[r&(h[f]=h[g=r&g+b])+(h[g]=b)];return e.i=f,e.j=g,c})(d)}function k(a,b){var c,d=[],e=typeof a;if(b&&"object"==e)for(c in a)try{d.push(k(a[c],b-1))}catch(f){}return d.length?d:"string"==e?a:a+"\0"}function l(a,b){for(var c,d=a+"",e=0;e<d.length;)b[r&e]=r&(c^=19*b[r&e])+d.charCodeAt(e++);return n(b)}function m(c){try{return a.crypto.getRandomValues(c=new Uint8Array(d)),n(c)}catch(e){return[+new Date,a,(c=a.navigator)&&c.plugins,a.screen,n(b)]}}function n(a){return String.fromCharCode.apply(0,a)}var o=c.pow(d,e),p=c.pow(2,f),q=2*p,r=d-1,s=c["seed"+i]=function(a,f,g){var h=[];f=1==f?{entropy:!0}:f||{};var r=l(k(f.entropy?[a,n(b)]:null==a?m():a,3),h),s=new j(h);return l(n(s.S),b),(f.pass||g||function(a,b,d){return d?(c[i]=a,b):a})(function(){for(var a=s.g(e),b=o,c=0;p>a;)a=(a+c)*d,b*=d,c=s.g(1);for(;a>=q;)a/=2,b/=2,c>>>=1;return(a+c)/b},r,"global"in f?f.global:this==c)};l(c[i](),b),g&&g.exports?g.exports=s:h&&h.amd&&h(function(){return s})}(this,[],Math,256,6,52,"object"==typeof module&&module,"function"==typeof define&&define,"random");
angular.module('me.mnmlst.ng-dummy', [])

.directive('dummy', function() {

    var texts = {
        lorem: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'In sit amet lorem ipsum. Suspendisse nisl enim, iaculis a blandit et, lobortis ut turpis.',
            'Sed eu velit vel augue ultricies ullamcorper sed ut nulla.',
            'Proin semper tellus sit amet diam fringilla mattis.',
            'Suspendisse elementum congue dolor sit amet posuere.',
            'In sed nunc viverra, pretium erat mattis, semper odio.',
            'Maecenas rutrum nulla felis.',
            'Donec id lorem non eros blandit viverra.',
            'Maecenas adipiscing velit ac urna feugiat, ullamcorper tincidunt ipsum auctor.',
            'Nulla hendrerit tempus condimentum.',
            'Proin ac massa et purus vestibulum interdum vitae sed mauris.',
            'Cras vulputate iaculis velit sed tincidunt.',
            'Integer porta libero non tellus euismod fermentum.',
            'Aenean magna diam, fermentum eu libero sagittis, feugiat venenatis neque.',
            'Fusce facilisis vehicula enim id consectetur.',
            'In feugiat auctor quam eget scelerisque.',
            'Donec est lorem, dignissim sit amet velit sed, fringilla tincidunt orci.',
            'Ut a eleifend dolor.',
            'Nam non scelerisque odio.',
            'Integer sit amet justo vel massa luctus hendrerit.',
            'Vivamus elementum mollis nisl vitae euismod.',
            'Aliquam erat volutpat.',
            'Mauris suscipit tempus eros, in elementum nisl cursus sed.',
            'Sed tincidunt semper nunc, id pellentesque quam egestas at.',
            'Integer a placerat augue.',
            'Nam urna tellus, consectetur at aliquam et, gravida eu odio.',
            'Nam scelerisque, tortor a molestie blandit, risus mauris malesuada urna, eget tempor turpis tortor id lorem.',
            'Morbi eget ornare leo.',
            'Nulla luctus pellentesque magna, ac ultrices nunc semper ut.'
        ],
        lingo: [
            'Perhaps a re-engineering of your current world view will re-energize your online nomenclature to enable a new holistic interactive enterprise internet communication solution.',
            'Upscaling the resurgent networking exchange solutions, achieving a breakaway systemic electronic data interchange system synchronization, thereby exploiting technical environments for mission critical broad based capacity constrained systems.',
             'Fundamentally transforming well designed actionable information whose semantic content is virtually null.',
             'To more fully clarify the current exchange, a few aggregate issues will require addressing to facilitate this distributed communication venue.',
             'In integrating non-aligned structures into existing legacy systems, a holistic gateway blueprint is a backward compatible packaging tangible of immeasurable strategic value in right-sizing conceptual frameworks when thinking outside the box.',
             'This being said, the ownership issues inherent in dominant thematic implementations cannot be understated vis-a vis document distribution on a real operating system consisting primarily of elements regarded as outdated and therefore impelling as a integrated out sourcing avenue to facilitate multi-level name value pairing in static components.',
             'In order to properly merge and articulate these core assets, an acquisition statement outlining the information architecture, leading to a racheting up of convergence across the organic platform is an opportunity without precedent in current applicability transactional modeling.',
             'Implementing these goals requires a careful examination to encompass an increasing complex out sourcing disbursement to ensure the extant parameters are not exceeded while focusing on infrastructure cohesion.',
             'Dynamic demand forecasting indicates that a mainstream approach may establish a basis for leading-edge information processing to insure the diversity of granularity in encompassing expansion of content provided within the multimedia framework under examination.',
             'Empowerment in information design literacy demands the immediate and complete disregard of the entire contents of this cyberspace communication.'
        ],
        disclaimer: [
            'This product is meant for educational purposes only.',
            'Any resemblance to real persons, living or dead is purely coincidental.',
            'Void where prohibited.',
            'Some assembly required.',
            'List each check separately by bank number.',
            'Batteries not included.',
            'Contents may settle during shipment.',
            'Use only as directed.',
            'No other warranty expressed or implied.',
            'Do not use while operating a motor vehicle or heavy equipment.',
            'Postage will be paid by addressee.',
            'Subject to CARB approval.',
            'This is not an offer to sell securities.',
            'Apply only to affected area.',
            'May be too intense for some viewers.',
            'Do not stamp.',
            'Not rated by the Motion Picture Association of America.',
            'Call for nutritional information.',
            'Use other side for additional listings.',
            'Printed on recycled paper.',
            'For recreational use only.',
            'Do not disturb.',
            'All models over 18 years of age.',
            'Prize not redeemable for cash value.',
            'If condition persists, consult your physician.',
            'No user-serviceable parts inside.',
            'Freshest if eaten before date on carton.',
            'To be used as a supplementary restraint system only.',
            'Always fasten your safety belt.',
            'Subject to change without notice.',
            'Times approximate.',
            'Simulated picture.',
            'Do not staple or paper clip.',
            'Price higher east of Alaska.',
            'No postage necessary if mailed in the United States.',
            'Do not X-ray.',
            'Breaking seal constitutes acceptance of agreement.',
            'For off-road use only.',
            'As seen on TV.',
            'One size fits all.',
            'Many suitcases look alike.',
            'Contains a substantial amount of non-tobacco ingredients.',
            'Colors may, in time, fade.',
            'We have sent the forms which seem right for you.',
            'Magnetic media, non-returnable if seal is broken.',
            'Formatted to fit your screen.',
            'Slippery when wet.',
            'For office use only.',
            'Not affiliated with the American Red Cross.',
            'Drop in any mailbox.',
            'Edited for television.',
            'Keep cool, process promptly.',
            'Post office will not deliver without postage.',
            'Do not write under this line.'
        ],
        pomo: [
            'If one examines postcultural discourse, one is faced with a choice: either reject Sartreist existentialism or conclude that discourse must come from communication.',
            'The subject is interpolated into a rationalism that includes consciousness as a totality.',
            'Therefore, Batailleist `powerful communication’ suggests that the significance of the participant is deconstruction, but only if the premise of Sartreist existentialism is valid.',
            'In the works of Eco, a predominant concept is the concept of textual language.',
            'A number of deconstructions concerning not, in fact, discourse, but neodiscourse may be revealed.',
            'In a sense, Bailey states that we have to choose between the semantic paradigm of expression and the dialectic paradigm of expression.',
            'Several materialisms concerning rationalism exist.',
            'However, in Foucault’s Pendulum, Eco denies the semantic paradigm of expression; in The Aesthetics of Thomas Aquinas, although, he examines precapitalist semiotic theory.',
            'Sartre uses the term ‘the semantic paradigm of expression’ to denote the economy of subcultural sexual identity.',
            'It could be said that if rationalism holds, the works of Eco are an example of textual libertarianism.',
            'An abundance of discourses concerning the difference between class and sexual identity may be found.',
            'However, von Ludwig implies that we have to choose between postdialectic deappropriation and cultural Marxism.',
            'Many discourses concerning rationalism exist.',
            'Thus, if precapitalist desublimation holds, we have to choose between Sartreist existentialism and textual rationalism.',
            'If one examines Sartreist existentialism, one is faced with a choice: either accept rationalism or conclude that reality may be used to disempower the underprivileged.',
            'Postcultural modern theory states that narrative is a product of the masses, given that language is distinct from reality.',
            'Therefore, the characteristic theme of Buxton’s model of rationalism is the role of the reader as poet.',
            'The primary theme of the works of Smith is a self-fulfilling whole.',
            'Von Junz implies that we have to choose between Sartreist existentialism and dialectic narrative.',
            'In a sense, the premise of postsemantic textual theory states that consciousness is used to entrench hierarchy.',
            '“Art is meaningless,” says Derrida; however, according to Dietrich, it is not so much art that is meaningless, but rather the collapse, and thus the meaninglessness, of art.',
            'The characteristic theme of Tilton’s analysis of rationalism is the bridge between society and class.',
            'It could be said that if structuralist postcapitalist theory holds, we have to choose between Sartreist existentialism and textual materialism.',
            'Debord’s critique of preconceptualist objectivism holds that the task of the observer is significant form.',
            'However, Hubbard implies that we have to choose between rationalism and capitalist narrative.',
            'The primary theme of the works of Joyce is the role of the reader as observer.',
            'Thus, Baudrillard uses the term ‘subcultural structural theory’ to denote the genre, and eventually the failure, of neosemanticist society.',
            'Dialectic discourse states that consciousness may be used to marginalize minorities.',
            'Therefore, the main theme of Buxton’s model of subtextual deconstruction is not narrative as such, but postnarrative.',
            'Lyotard uses the term ‘rationalism’ to denote the difference between sexual identity and society.',
            'However, if Sartreist existentialism holds, we have to choose between capitalist nihilism and the neotextual paradigm of narrative.'
        ],
        dickens: [
            'Marley was dead: to begin with.',
            'There is no doubt whatever about that.',
            'The register of his burial was signed by the clergyman, the clerk, the undertaker, and the chief mourner.',
            'Scrooge signed it: and Scrooge’s name was good upon ’Change, for anything he chose to put his hand to.',
            'Old Marley was as dead as a door-nail.',
            'Mind! I don’t mean to say that I know, of my own knowledge, what there is particularly dead about a door-nail.',
            'I might have been inclined, myself, to regard a coffin-nail as the deadest piece of ironmongery in the trade.',
            'But the wisdom of our ancestors is in the simile; and my unhallowed hands shall not disturb it, or the Country’s done for.',
            'You will therefore permit me to repeat, emphatically, that Marley was as dead as a door-nail.',
            'Scrooge knew he was dead?',
            'Of course he did.',
            'How could it be otherwise?',
            'Scrooge and he were partners for I don’t know how many years.',
            'Scrooge was his sole executor, his sole administrator, his sole assign, his sole residuary legatee, his sole friend, and sole mourner.',
            'And even Scrooge was not so dreadfully cut up by the sad event, but that he was an excellent man of business on the very day of the funeral, and solemnised it with an undoubted bargain.',
            'The mention of Marley’s funeral brings me back to the point I started from.',
            'There is no doubt that Marley was dead.',
            'This must be distinctly understood, or nothing wonderful can come of the story I am going to relate.',
            'If we were not perfectly convinced that Hamlet’s Father died before the play began, there would be nothing more remarkable in his taking a stroll at night, in an easterly wind, upon his own ramparts, than there would be in any other middle-aged gentleman rashly turning out after dark in a breezy spot—say Saint Paul’s Churchyard for instance—literally to astonish his son’s weak mind.',
            'Scrooge never painted out Old Marley’s name.',
            'There it stood, years afterwards, above the warehouse door: Scrooge and Marley.',
            'The firm was known as Scrooge and Marley.',
            'Sometimes people new to the business called Scrooge Scrooge, and sometimes Marley, but he answered to both names.',
            'It was all the same to him.',
            'Oh! But he was a tight-fisted hand at the grindstone, Scrooge! a squeezing, wrenching, grasping, scraping, clutching, covetous, old sinner!',
            'Hard and sharp as flint, from which no steel had ever struck out generous fire; secret, and self-contained, and solitary as an oyster.',
            'The cold within him froze his old features, nipped his pointed nose, shrivelled his cheek, stiffened his gait; made his eyes red, his thin lips blue; and spoke out shrewdly in his grating voice.',
            'A frosty rime was on his head, and on his eyebrows, and his wiry chin.',
            'He carried his own low temperature always about with him; he iced his office in the dog-days; and didn’t thaw it one degree at Christmas.',
            'External heat and cold had little influence on Scrooge.',
            'No warmth could warm, no wintry weather chill him.',
            'No wind that blew was bitterer than he, no falling snow was more intent upon its purpose, no pelting rain less open to entreaty.',
            'Foul weather didn’t know where to have him.',
            'The heaviest rain, and snow, and hail, and sleet, could boast of the advantage over him in only one respect.',
            'They often “came down” handsomely, and Scrooge never did.'
        ]
    };

    var defaults = {
        P: { sentences: 3 },
        H1: { words: 3 },
        H2: { words: 3 },
        H3: { words: 4 },
        H4: { words: 3 },
        H5: { words: 5 },
        H6: { words: 5 },
        LI: { words: 8 },
        DT: { words: 1 },
        DD: { sentences: 2 },
        BLOCKQUOTE: { sentences: 1 },
        TD: { words: 3 },
        SPAN: { words: 5 },
        EM: { words: 3 },
        STRONG: { words: 3 },
        B: { words: 2 },
        I: { words: 2 },
        Q: { words: 5 }
    };

    Math.seedrandom('dummy');

    var origin; // used to start at 0 each time.

    function dummyText ( opts ) {
        var corpus = opts.corpus || 'lorem',
            i = opts.start,
            isRandom = typeof(i) === 'undefined',
            mustReset = typeof(origin) === 'undefined',
            skip = opts.skip || 1,
            sentences = opts.sentences || 1,
            words = opts.words,
            text = texts[corpus] || texts.lorem,
            len = text.length,
            output = [],
            s;

        if ( isRandom ) {
            i = Math.floor( Math.random() * len );
        }

        if ( mustReset ) {
            origin = i;
        }

        if ( isRandom ) {
            // possible modulo of a negative number, so take care here.
            i = ((i + len - origin) % len + len) % len;
        }

        while( sentences-- ) {
            s = text[i];
            if ( words ) {
                s = s.split(' ').slice(0,words).join(' ');
            }
            output.push( s );
            i = (i + skip) % len;
        }

        return output.join(' ');
    }

    function parseAttrs (str, prior) {
        var opts = prior || {},
            reWords = /^([0-9]+)w$/,
            reSentences = /^([0-9]+)s?$/,
            reStart = /^@([0-9]+)$/,
            reSkip = /^\+([0-9]+)$/,
            reCorpus = /^[a-z]+$/,
            matches;

        str.split(' ').forEach( function (s) {
            if ( matches = reWords.exec(s) ) {
                opts.words = parseInt(matches[1]);
                opts.sentences = 0;
            } else if ( matches = reSentences.exec(s) ) {
                opts.sentences = parseInt(matches[1]);
                opts.words = 0;
            } else if ( matches = reStart.exec(s) ) {
                opts.start = parseInt(matches[1]);
            } else if ( matches = reSkip.exec(s) ) {
                opts.skip = parseInt(matches[1]);
            } else if ( matches = reCorpus.exec(s) ) {
                opts.corpus = matches[0];
            }
        });
        return opts;
    }

    return {
        restrict: 'AE',
        link: function (scope, element, attrs) {
            var opts = defaults[element[0].tagName] || defaults.P,
                span = document.createElement('span');

            if ( attrs.dummy ) {
                opts = parseAttrs( attrs.dummy, opts );
            }

            span.textContent = dummyText( opts );
            span.className = 'ng-dummy-text';
            element[0].appendChild( span );
        }
    };
});
