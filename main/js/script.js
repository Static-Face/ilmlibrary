document.addEventListener("DOMContentLoaded", function () {
    const duas = [
        { arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ ٱلْعَفْوَ وَٱلْعَافِيَةَ', translation: 'O Allah, I ask You for forgiveness and wellbeing', source: 'Sahih Muslim 2202' },
        { arabic: 'رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ العَلِيمُ', translation: 'Our Lord, accept [this] from us. Indeed You are the Hearing, the Knowing', source: 'Surah Al-Baqarah 2:127' },
        { arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ', translation: 'Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire', source: 'Surah Al-Baqarah 2:201' },
        { arabic: 'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ', translation: 'Our Lord, pour upon us patience and let us die as Muslims [in submission to You]', source: 'Surah Al-A\'raf 7:126' },
        { arabic: 'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ', translation: 'My Lord, forgive me and my parents and the believers the Day the account is established', source: 'Surah Ibrahim 14:41' },
        { arabic: 'رَبِّ اشْرَحْ لِي صَدْرِي * وَيَسِّرْ لِي أَمْرِي', translation: 'My Lord, expand for me my breast [with assurance] and ease for me my task', source: 'Surah Taha 20:25-26' },
        { arabic: 'رَبِّ زِدْنِي عِلْمًا', translation: 'My Lord, increase me in knowledge', source: 'Surah Taha 20:114' },
        { arabic: 'رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ', translation: 'My Lord, indeed I am, for whatever good You would send down to me, in need', source: 'Surah Al-Qasas 28:24' },
        { arabic: 'رَبِّ هَبْ لِي مِنْ لَدُنْكَ ذُرِّيَّةً طَيِّبَةً إِنَّكَ سَمِيعُ الدُّعَاءِ', translation: 'My Lord, grant me from Yourself a good offspring. Indeed, You are the Hearer of supplication', source: 'Surah Aal-E-Imran 3:38' },
        { arabic: 'رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ', translation: 'Our Lord, forgive us our sins and our excesses in our affairs and plant firmly our feet and give us victory over the disbelieving people', source: 'Surah Aal-E-Imran 3:147' },
        { arabic: 'رَبَّنَا فَاغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّئَاتِنَا وَتَوَفَّنَا مَعَ الْأَبْرَارِ', translation: 'Our Lord, so forgive us our sins and remove from us our misdeeds and cause us to die with the righteous', source: 'Surah Aal-E-Imran 3:193' },
        { arabic: 'رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَائِي', translation: 'My Lord, make me an establisher of prayer, and [many] from my descendants. Our Lord, and accept my supplication', source: 'Surah Ibrahim 14:40' },
        { arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالسَّدَادَ', translation: 'O Allah, I ask You for guidance and soundness', source: 'Sahih Muslim 2721' },
        { arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي', translation: 'O Allah, I ask You for forgiveness and well-being in my religious and worldly affairs, and my family and my wealth', source: 'Sunan Abu Dawood 5074' },
        { arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ وَتَحَوُّلِ عَافِيَتِكَ وَفُجَاءَةِ نِقْمَتِكَ وَجَمِيعِ سَخَطِكَ', translation: 'O Allah, I seek refuge in You from the removal of Your favor, the loss of Your well-being, the sudden onset of Your vengeance, and all forms of Your wrath', source: 'Sahih Muslim 2739' },
        { arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا عَمِلْتُ وَمِنْ شَرِّ مَا لَمْ أَعْمَلْ', translation: 'O Allah, I seek refuge in You from the evil of what I have done and from the evil of what I have not done', source: 'Sahih Muslim 2716' },
        { arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْبُخْلِ وَالْجُبْنِ وَسُوءِ الْعُمُرِ وَعَذَابِ الْقَبْرِ', translation: 'O Allah, I seek refuge in You from stinginess, cowardice, the evil of old age, and the torment of the grave', source: 'Sahih Muslim 2723' },
        { arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَغَلَبَةِ الْعَدُوِّ وَشَمَاتَةِ الْأَعْدَاءِ', translation: 'O Allah, I seek refuge in You from being overwhelmed by debt, overpowered by enemies, and the rejoicing of adversaries', source: 'Sunan Abu Dawood 1547' },
        { arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ جَهْدِ الْبَلَاءِ وَدَرَكِ الشَّقَاءِ وَسُوءِ الْقَضَاءِ وَشَمَاتَةِ الْأَعْدَاءِ', translation: 'O Allah, I seek refuge in You from the trials of severe calamity, from falling into misfortune, from a bad fate, and from the gloating of enemies', source: 'Sahih Bukhari 6363' },
        { arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ وَتَحَوُّلِ عَافِيَتِكَ وَفُجَاءَةِ نِقْمَتِكَ وَجَمِيعِ سَخَطِكَ', translation: 'O Allah, I seek refuge in You from the decline of Your favors, the change of Your well-being, the suddenness of Your punishment, and all that displeases You', source: 'Sahih Muslim 2739' },
        { arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْكُلَالِ وَالْهَرَمِ وَالْمَأْثَمِ وَالْمَغْرَمِ', translation: 'O Allah, I seek refuge in You from laziness, old age, sin, and debt', source: 'Sahih Bukhari 6364' },
        { arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ', translation: 'O Allah, I seek refuge in You from being overpowered by debt and from being overpowered by men', source: 'Sunan Abu Dawood 1548' }
    ];

    let currentDuaIndex = Math.floor(Math.random() * duas.length);
    const duaText = document.getElementById('dua-text');
    const duaTranslation = document.getElementById('dua-translation');
    const duaSlideshow = document.querySelector('.dua-slideshow');

    function displayDua(index) {
        duaText.style.opacity = 0;
        duaTranslation.style.opacity = 0;
        setTimeout(() => {
            duaText.textContent = duas[index].arabic;
            duaTranslation.innerHTML = `<i>${duas[index].translation} - ${duas[index].source}</i>`;
            duaText.style.opacity = 1;
            duaTranslation.style.opacity = 1;
        }, 500); // Adjust this to match the CSS transition duration
    }

    if (duaText && duaTranslation && duaSlideshow) {
        displayDua(currentDuaIndex); // Initial display
        duaSlideshow.classList.remove('hidden'); // Remove hidden class once the content is set
    } else {
        console.error('Required HTML elements are missing.');
    }

    setInterval(() => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * duas.length);
        } while (newIndex === currentDuaIndex); // Ensure a new dua is shown
        currentDuaIndex = newIndex;
        displayDua(currentDuaIndex);
    }, 30000); // Change every 30 seconds

    // Reload the page to show a new random dua
    window.addEventListener('load', function () {
        currentDuaIndex = Math.floor(Math.random() * duas.length);
        displayDua(currentDuaIndex);
    });
});
