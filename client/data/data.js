angular.module('chinapp')

.factory('FlashcardData', function () {
	return { vocabList: [
		{
			id: 0,
			character: '的',
			pinyin: 'de/di2/di4',
			translation: '(possessive particle) *of, really and truly, aim/clear',
			extraVocab: undefined
		}, {
			id: 1,
			character: '一',
			pinyin: 'yi1',
			translation: 'one/ 1/ single/ a(n)',
			extraVocab: undefined
		}, {
			id: 2,
			character: '是',
			pinyin: 'shi4',
			translation: 'is/ are/ am/ yes/ to be',
			extraVocab: undefined
		}, {
			id: 3,
			character: '不',
			pinyin: 'bu4/bu2',
			translation: '(negative prefix) /not /no',
			extraVocab: undefined
		}, {
			id: 4,
			character: '了',
			pinyin: 'le/liao3/liao4',
			translation: '(modal particle intensifying preceding clause) /(completed action marker), to know/ to understand/ to know, clear, look afar from a high place',
			extraVocab: undefined
		}, {
			id: 5,
			character: '在',
			pinyin: 'zai4',
			translation: '(located) at /in /exist',
			extraVocab: undefined
		}, {
			id: 6,
			character: '人',
			pinyin: 'ren2',
			translation: 'man /person /people',
			extraVocab: undefined
		}, {
			id: 7,
			character: '有',
			pinyin: 'you3',
			translation: 'to have /there is /there are /to exist /to be',
			extraVocab: undefined
		}, {
			id: 8,
			character: '我',
			pinyin: 'wo3',
			translation: 'I /me /myself',
			extraVocab: undefined
		}, {
			id: 9,
			character: '他',
			pinyin: 'ta1',
			translation: 'he /him',
			extraVocab: undefined
		}, {
			id: 10,
			character: '这',
			pinyin: 'zhe4/zhei4',
			translation: 'this /these, this /these /(sometimes used before a measure word, especially in Beijing)',
			extraVocab: undefined
		}, {
			id: 11,
			character: '个',
			pinyin: 'ge4',
			translation: '(a measure word) /individual',
			extraVocab: undefined
		}, {
			id: 12,
			character: '们',
			pinyin: 'men',
			translation: '(plural marker for pronouns and a few animate nouns)',
			extraVocab: undefined
		}, {
			id: 13,
			character: '中',
			pinyin: 'zhong1/zhong4',
			translation: 'within /among /in /middle /center /while (doing sth) /during /China /Chinese, hit (the mark)',
			extraVocab: undefined
		}, {
			id: 14,
			character: '来',
			pinyin: 'lai2',
			translation: 'on /on top /upon /first (of two parts) /previous or last (week, etc.) /upper /higher /above /previous /to climb /to go into /above /to go up',
			extraVocab: undefined
		}, {
			id: 15,
			character: '上',
			pinyin: 'shang4',
			translation: '(possessive particle) *of, really and truly, aim /clear',
			extraVocab: undefined
		}, {
			id: 16,
			character: '大',
			pinyin: 'da4/dai4',
			translation: 'big /huge /large /major /great /wide /deep /oldest /eldest, doctor',
			extraVocab: undefined
		}, {
			id: 17,
			character: '为',
			pinyin: 'wei2/wei4',
			translation: 'act as /take...to be /to be /to do /to serve as /to become, because of /for /to',
			extraVocab: undefined
		}, {
			id: 18,
			character: '和',
			pinyin: 'he2/he4/huo2/huo4',
			translation: 'and /together with /with /peace /harmony /union, cap (a poem) /respond in singing, soft /warm, mix together /to blend',
			extraVocab: undefined
		}, {
			id: 19,
			character: '国',
			pinyin: 'guo2',
			translation: 'country /state /nation',
			extraVocab: undefined
		}, {
			id: 20,
			character: '地',
			pinyin: 'de/di2/di4',
			translation: '(subor. part. adverbial) /-ly, earth /ground /field /place /land',
			extraVocab: undefined
		}, {
			id: 21,
			character: '到',
			pinyin: 'dao4',
			translation: 'to (a place) /until (a time) /up to /to go /to arrive',
			extraVocab: undefined
		}, {
			id: 22,
			character: '以',
			pinyin: 'yi3',
			translation: 'to use /according to /so as to /in order to /by /with /because /Israel (abbrev.)',
			extraVocab: undefined
		}, {
			id: 23,
			character: '说',
			pinyin: 'shui4/shuo1',
			translation: 'persuade (politically), to speak /to say',
			extraVocab: undefined
		}, {
			id: 24,
			character: '时',
			pinyin: 'shi2',
			translation: 'o\'clock /time /when /hour /season /period',
			extraVocab: undefined
		}, {
			id: 25,
			character: '要',
			pinyin: 'yao1/yao4',
			translation: 'demand /ask /request /coerce, important /vital /to want /to be going to /must',
			extraVocab: undefined
		},{
			id: 26,
			character: '就',
			pinyin: 'jiu4',
			translation: 'at once /then /right away /only /(emphasis) /to approach /to move towards /to undertake',
			extraVocab: undefined
		},{
			id: 27,
			character: '出',
			pinyin: 'chu1',
			translation: 'to go out /to come out /to occur /to produce /to go beyond /to rise /to put forth /to occur /to happen /(a measure word for dramas, plays, or operas)',
			extraVocab: undefined
		},{
			id: 28,
			character: '会',
			pinyin: 'guo2',
			translation: 'country /state /nation',
			extraVocab: undefined
		},{
			id: 29,
			character: '可',
			pinyin: 'ke3',
			translation: 'can /may /able to /certain(ly) /to suit /(particle used for emphasis)',
			extraVocab: undefined
		},{
			id: 30,
			character: '也',
			pinyin: 'ye3',
			translation: 'also /too',
			extraVocab: undefined
		},{
			id: 31,
			character: '你',
			pinyin: 'ni3',
			translation: 'you',
			extraVocab: undefined
		},{
			id: 32,
			character: '对',
			pinyin: 'dui4',
			translation: 'couple /pair /to be opposite /to oppose /to face /for /to /correct (answer) /to answer /to reply /to direct (towards sth) /right',
			extraVocab: undefined
		},{
			id: 33,
			character: '生',
			pinyin: 'sheng1',
			translation: 'to be born /to give birth /life /to grow',
			extraVocab: undefined
		},{
			id: 34,
			character: '能',
			pinyin: 'neng2',
			translation: 'can /may /capable /energy /able',
			extraVocab: undefined
		},{
			id: 35,
			character: '而',
			pinyin: 'er2',
			translation: 'and /as well as /but (not) /yet (not) /(shows causal relation) /(shows change of state) /(shows contrast)',
			extraVocab: undefined
		},{
			id: 36,
			character: '子',
			pinyin: 'zi3/zi',
			translation: '11 p.m.-1 a.m. /1st earthly branch /child /midnight /son /child /seed /egg /small thing, (noun suff.)',
			extraVocab: undefined
		},{
			id: 37,
			character: '那',
			pinyin: 'na3/na4/nei4',
			translation: 'how/which, that/ those, that/ those/ (sometimes used before a measure word, especially in Beijing)',
			extraVocab: undefined
		},{
			id: 38,
			character: '得',
			pinyin: 'de2/de/dei3',
			translation: 'obtain /get /gain /proper /suitable /proud /contented /allow /permit /ready /finished, a sentence particle used after a verb to show effect',
			//degree or possibility, to have to /must /ought to /to need to',
			extraVocab: undefined
		},{
			id: 39,
			character: '于',
			pinyin: 'yu2',
			translation: '(surname), in /at /to /from /by /than /out of',
			extraVocab: undefined
		},{
			id: 40,
			character: '着',
			pinyin: 'zhao1 /zhao2 /zhe /zhu4 /zhuo2',
			translation: 'catch /receive /suffer, part. indicates the successful result of a verb/to touch /to come in contact with /to feel /to be affected by /to catch fire',
			//to fall asleep /to burn, -ing part. (indicates an action in progress) /part. coverb-forming after some verbs, to make known /to show /to prove /to write /book /outstanding, to wear (clothes) /to contact /to use /to apply',
			extraVocab: undefined
		},{
			id: 41,
			character: '下',
			pinyin: 'xia4',
			translation: 'under /second (of two parts) /next (week, etc.) /lower /below /underneath /down(wards) /to decline /to go down /latter',
			extraVocab: undefined
		},{
			id: 42,
			character: '自',
			pinyin: 'zi4',
			translation: 'from /self /oneself /since',
			extraVocab: undefined
		},{
			id: 43,
			character: '之',
			pinyin: 'zhi1',
			translation: '(literary equivalent of 的) /(subor. part.) /him /her /it',
			extraVocab: undefined
		},{
			id: 44,
			character: '年',
			pinyin: 'nian2',
			translation: 'year',
			extraVocab: undefined
		},{
			id: 45,
			character: '过',
			pinyin: 'guo4',
			translation: '(experienced action marker) /to cross /to go over /to pass (time) /to celebrate (a holiday) /to live /to get along /(surname) /excessively /too-',
			extraVocab: undefined
		},{
			id: 46,
			character: '发',
			pinyin: 'fa1/fa4',
			translation: 'to send out /to show (one\'s feeling) /to issue /to develop, hair',
			extraVocab: undefined
		},{
			id: 47,
			character: '后',
			pinyin: 'hou4',
			translation: 'empress /queen /surname, back /behind /rear /afterwards /after /later',
			extraVocab: undefined
		},{
			id: 48,
			character: '作',
			pinyin: 'zuo4',
			translation: 'to regard as /to take (somebody) for /to do /to make',
			extraVocab: undefined
		},{
			id: 49,
			character: '里',
			pinyin: 'li3',
			translation: 'inside /internal /interior, village /within /inside, Chinese mile /neighborhood /li, a Chinese unit of length = one-half kilometer /hometown',
			extraVocab: undefined
		},
	],
	//====================//
	vocabListObj: {
		0: {
			id: 0,
			character: '的',
			pinyin: 'de/di2/di4',
			translation: '(possessive particle) *of, really and truly, aim/clear',
			extraVocab: "non"
		},
		1: {
			id: 1,
			character: '一',
			pinyin: 'yi1',
			translation: 'one/ 1/ single/ a(n)',
			extraVocab: "non"
		},
		2: {
			id: 2,
			character: '是',
			pinyin: 'shi4',
			translation: 'is/ are/ am/ yes/ to be',
			extraVocab: "non"
		},
		3: {
			id: 3,
			character: '不',
			pinyin: 'bu4/bu2',
			translation: '(negative prefix) /not /no',
			extraVocab: "non"
		},
		4: {
			id: 4,
			character: '了',
			pinyin: 'le/liao3/liao4',
			translation: '(modal particle intensifying preceding clause) /(completed action marker), to know/ to understand/ to know, clear, look afar from a high place',
			extraVocab: "non"
		},
		5: {
			id: 5,
			character: '在',
			pinyin: 'zai4',
			translation: '(located) at /in /exist',
			extraVocab: "non"
		},
		6: {
			id: 6,
			character: '人',
			pinyin: 'ren2',
			translation: 'man /person /people',
			extraVocab: "non"
		},
		7: {
			id: 7,
			character: '有',
			pinyin: 'you3',
			translation: 'to have /there is /there are /to exist /to be',
			extraVocab: "non"
		},
		8: {
			id: 8,
			character: '我',
			pinyin: 'wo3',
			translation: 'I /me /myself',
			extraVocab: "non"
		},
		9: {
			id: 9,
			character: '他',
			pinyin: 'ta1',
			translation: 'he /him',
			extraVocab: "non"
		},
		10: {
			id: 10,
			character: '这',
			pinyin: 'zhe4/zhei4',
			translation: 'this /these, this /these /(sometimes used before a measure word, especially in Beijing)',
			extraVocab: "non"
		},
		11: {
			id: 11,
			character: '个',
			pinyin: 'ge4',
			translation: '(a measure word) /individual',
			extraVocab: "non"
		},
		12: {
			id: 12,
			character: '们',
			pinyin: 'men',
			translation: '(plural marker for pronouns and a few animate nouns)',
			extraVocab: "non"
		},
		13: {
			id: 13,
			character: '中',
			pinyin: 'zhong1/zhong4',
			translation: 'within /among /in /middle /center /while (doing sth) /during /China /Chinese, hit (the mark)',
			extraVocab: "non"
		},
		14: {
			id: 14,
			character: '来',
			pinyin: 'lai2',
			translation: 'on /on top /upon /first (of two parts) /previous or last (week, etc.) /upper /higher /above /previous /to climb /to go into /above /to go up',
			extraVocab: "non"
		},
		15: {
			id: 15,
			character: '上',
			pinyin: 'shang4',
			translation: '(possessive particle) *of, really and truly, aim /clear',
			extraVocab: "non"
		},
		16: {
			id: 16,
			character: '大',
			pinyin: 'da4/dai4',
			translation: 'big /huge /large /major /great /wide /deep /oldest /eldest, doctor',
			extraVocab: "non"
		},
		17: {
			id: 17,
			character: '为',
			pinyin: 'wei2/wei4',
			translation: 'act as /take...to be /to be /to do /to serve as /to become, because of /for /to',
			extraVocab: "non"
		},
		18: {
			id: 18,
			character: '和',
			pinyin: 'he2/he4/huo2/huo4',
			translation: 'and /together with /with /peace /harmony /union, cap (a poem) /respond in singing, soft /warm, mix together /to blend',
			extraVocab: "non"
		},
		19: {
			id: 19,
			character: '国',
			pinyin: 'guo2',
			translation: 'country /state /nation',
			extraVocab: "non"
		},
		20: {
			id: 20,
			character: '地',
			pinyin: 'de/di2/di4',
			translation: '(subor. part. adverbial) /-ly, earth /ground /field /place /land',
			extraVocab: "non"
		},
		21: {
			id: 21,
			character: '到',
			pinyin: 'dao4',
			translation: 'to (a place) /until (a time) /up to /to go /to arrive',
			extraVocab: "non"
		},
		22: {
			id: 22,
			character: '以',
			pinyin: 'yi3',
			translation: 'to use /according to /so as to /in order to /by /with /because /Israel (abbrev.)',
			extraVocab: "non"
		},
		23: {
			id: 23,
			character: '说',
			pinyin: 'shui4/shuo1',
			translation: 'persuade (politically), to speak /to say',
			extraVocab: "non"
		},
		24: {
			id: 24,
			character: '时',
			pinyin: 'shi2',
			translation: 'o\'clock /time /when /hour /season /period',
			extraVocab: "non"
		},
		25: {
			id: 25,
			character: '要',
			pinyin: 'yao1/yao4',
			translation: 'demand /ask /request /coerce, important /vital /to want /to be going to /must',
			extraVocab: "non"
		},
		26: {
			id: 26,
			character: '就',
			pinyin: 'jiu4',
			translation: 'at once /then /right away /only /(emphasis) /to approach /to move towards /to undertake',
			extraVocab: "non"
		},
		27: {
			id: 27,
			character: '出',
			pinyin: 'chu1',
			translation: 'to go out /to come out /to occur /to produce /to go beyond /to rise /to put forth /to occur /to happen /(a measure word for dramas, plays, or operas)',
			extraVocab: "non"
		},
		28: {
			id: 28,
			character: '会',
			pinyin: 'guo2',
			translation: 'country /state /nation',
			extraVocab: "non"
		},
		29: {
			id: 29,
			character: '可',
			pinyin: 'ke3',
			translation: 'can /may /able to /certain(ly) /to suit /(particle used for emphasis)',
			extraVocab: "non"
		},
		30: {
			id: 30,
			character: '也',
			pinyin: 'ye3',
			translation: 'also /too',
			extraVocab: "non"
		},
		31: {
			id: 31,
			character: '你',
			pinyin: 'ni3',
			translation: 'you',
			extraVocab: "non"
		},
		32: {
			id: 32,
			character: '对',
			pinyin: 'dui4',
			translation: 'couple /pair /to be opposite /to oppose /to face /for /to /correct (answer) /to answer /to reply /to direct (towards sth) /right',
			extraVocab: "non"
		},
		33: {
			id: 33,
			character: '生',
			pinyin: 'sheng1',
			translation: 'to be born /to give birth /life /to grow',
			extraVocab: "non"
		},
		34: {
			id: 34,
			character: '能',
			pinyin: 'neng2',
			translation: 'can /may /capable /energy /able',
			extraVocab: "non"
		},
		35: {
			id: 35,
			character: '而',
			pinyin: 'er2',
			translation: 'and /as well as /but (not) /yet (not) /(shows causal relation) /(shows change of state) /(shows contrast)',
			extraVocab: "non"
		},
		36: {
			id: 36,
			character: '子',
			pinyin: 'zi3/zi',
			translation: '11 p.m.-1 a.m. /1st earthly branch /child /midnight /son /child /seed /egg /small thing, (noun suff.)',
			extraVocab: "non"
		},
		37: {
			id: 37,
			character: '那',
			pinyin: 'na3/na4/nei4',
			translation: 'how/which, that/ those, that/ those/ (sometimes used before a measure word, especially in Beijing)',
			extraVocab: "non"
		},
		38: {
			id: 38,
			character: '得',
			pinyin: 'de2/de/dei3',
			translation: 'obtain /get /gain /proper /suitable /proud /contented /allow /permit /ready /finished, a sentence particle used after a verb to show effect',
			//degree or possibility, to have to /must /ought to /to need to',
			extraVocab: "non"
		},
		39: {
			id: 39,
			character: '于',
			pinyin: 'yu2',
			translation: '(surname), in /at /to /from /by /than /out of',
			extraVocab: "non"
		},
		40: {
			id: 40,
			character: '着',
			pinyin: 'zhao1 /zhao2 /zhe /zhu4 /zhuo2',
			translation: 'catch /receive /suffer, part. indicates the successful result of a verb/to touch /to come in contact with /to feel /to be affected by /to catch fire',
			//to fall asleep /to burn, -ing part. (indicates an action in progress) /part. coverb-forming after some verbs, to make known /to show /to prove /to write /book /outstanding, to wear (clothes) /to contact /to use /to apply',
			extraVocab: "non"
		},
		41: {
			id: 41,
			character: '下',
			pinyin: 'xia4',
			translation: 'under /second (of two parts) /next (week, etc.) /lower /below /underneath /down(wards) /to decline /to go down /latter',
			extraVocab: "non"
		},
		42: {
			id: 42,
			character: '自',
			pinyin: 'zi4',
			translation: 'from /self /oneself /since',
			extraVocab: "non"
		},
		43: {
			id: 43,
			character: '之',
			pinyin: 'zhi1',
			translation: '(literary equivalent of 的) /(subor. part.) /him /her /it',
			extraVocab: "non"
		},
		44: {
			id: 44,
			character: '年',
			pinyin: 'nian2',
			translation: 'year',
			extraVocab: "non"
		},
		45: {
			id: 45,
			character: '过',
			pinyin: 'guo4',
			translation: '(experienced action marker) /to cross /to go over /to pass (time) /to celebrate (a holiday) /to live /to get along /(surname) /excessively /too-',
			extraVocab: "non"
		},
		46: {
			id: 46,
			character: '发',
			pinyin: 'fa1/fa4',
			translation: 'to send out /to show (one\'s feeling) /to issue /to develop, hair',
			extraVocab: "non"
		},
		47: {
			id: 47,
			character: '后',
			pinyin: 'hou4',
			translation: 'empress /queen /surname, back /behind /rear /afterwards /after /later',
			extraVocab: "non"
		},
		48: {
			id: 48,
			character: '作',
			pinyin: 'zuo4',
			translation: 'to regard as /to take (somebody) for /to do /to make',
			extraVocab: "non"
		},
		49: {
			id: 49,
			character: '里',
			pinyin: 'li3',
			translation: 'inside /internal /interior, village /within /inside, Chinese mile /neighborhood /li, a Chinese unit of length = one-half kilometer /hometown',
			extraVocab: "non"
		}
	}

};

});