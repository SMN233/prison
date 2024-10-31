var storyContent = {"inkVersion":21,"root":[[{"->":"start"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"music_a":["#","^AUDIOLOOP: music_a.mp3","/#","ev","void","/ev","->->",{"#f":1}],"music_b":["#","^AUDIOLOOP: music_b.mp3","/#","ev","void","/ev","->->",{"#f":1}],"music_c":["#","^AUDIOLOOP: music_c.mp3","/#","ev","void","/ev","->->",{"#f":1}],"despair":[{"->t->":"music_b"},"^最后一丝希望破灭了，你确信永远也","\n","^逃 不 出 去 了 。","\n",[["ev",{"^->":"despair.5.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^从头来过",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"despair.5.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","#","^RESTART","/#","end",{"#f":5}]}],{"#f":1}],"crazy":[{"->t->":"music_b"},"^你已经看不清楚眼前的是现实还是虚幻了。怎么能","\n","^逃 得 出 去 呢 。","\n",[["ev",{"^->":"crazy.5.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^从头来过",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"crazy.5.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","#","^RESTART","/#","end",{"#f":5}]}],{"#f":1}],"dead":[{"->t->":"music_b"},"^你的生命力已经支撑不住你的灵魂，你已经","\n","^逃 不 出 来 了 。","\n",[["ev",{"^->":"dead.5.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^从头来过",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"dead.5.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","#","^RESTART","/#","end",{"#f":5}]}],{"#f":1}],"objects":["^你拥有","\n","ev",{"VAR?":"pen"},0,"!=","/ev",[{"->":".^.b","c":true},{"b":["ev",{"VAR?":"pen"},"out","/ev","^只笔",{"->":".^.^.^.8"},null]}],"nop","\n","ev",{"VAR?":"paper"},0,"!=","/ev",[{"->":".^.b","c":true},{"b":["ev",{"VAR?":"pen"},"out","/ev","^张纸",{"->":".^.^.^.16"},null]}],"nop","\n","ev",{"VAR?":"sword"},0,"!=","/ev",[{"->":".^.b","c":true},{"b":["ev",{"VAR?":"pen"},"out","/ev","^把剑",{"->":".^.^.^.24"},null]}],"nop","\n","ev",{"VAR?":"shield"},0,"!=","/ev",[{"->":".^.b","c":true},{"b":["ev",{"VAR?":"pen"},"out","/ev","^个盾牌",{"->":".^.^.^.32"},null]}],"nop","\n","ev",{"VAR?":"magic"},0,"!=","/ev",[{"->":".^.b","c":true},{"b":["ev",{"VAR?":"pen"},"out","/ev","^张火球卷轴",{"->":".^.^.^.40"},null]}],"nop","\n","ev",{"VAR?":"knife"},0,"!=","/ev",[{"->":".^.b","c":true},{"b":["ev",{"VAR?":"pen"},"out","/ev","^把小刀",{"->":".^.^.^.48"},null]}],"nop","\n","ev",{"VAR?":"tape"},0,"!=","/ev",[{"->":".^.b","c":true},{"b":["ev",{"VAR?":"pen"},"out","/ev","^个胶带",{"->":".^.^.^.56"},null]}],"nop","\n","ev",{"VAR?":"scissor"},0,"!=","/ev",[{"->":".^.b","c":true},{"b":["ev",{"VAR?":"pen"},"out","/ev","^把剪刀",{"->":".^.^.^.64"},null]}],"nop","\n","ev",{"VAR?":"key_dear"},0,"!=","/ev",[{"->":".^.b","c":true},{"b":["ev",{"VAR?":"pen"},"out","/ev","^个某种钥匙",{"->":".^.^.^.72"},null]}],"nop","\n","ev","void","/ev","->->",{"#f":1}],"fight":["^你的属性：血量","ev",{"VAR?":"HP"},"out","/ev","^，攻击","ev",{"VAR?":"ATK"},"out","/ev","^，防御","ev",{"VAR?":"DEF"},"out","/ev","^，闪避","ev",{"VAR?":"DOD"},"out","/ev","^，反应","ev",{"VAR?":"V"},"out","/ev","\n","^敌人属性：血量","ev",{"VAR?":"hp"},"out","/ev","^，攻击","ev",{"VAR?":"atk"},"out","/ev","^，防御","ev",{"VAR?":"def"},"out","/ev","^，闪避","ev",{"VAR?":"dod"},"out","/ev","^，反应","ev",{"VAR?":"v"},"out","/ev","\n",["ev",{"VAR?":"V"},{"VAR?":"v"},">=","/ev",{"->":".^.b","c":true},{"b":["\n",{"->t->":"fight.fa"},{"->":"fight.54"},null]}],[{"->":".^.b"},{"b":["\n",{"->t->":"fight.fb"},{"->":"fight.54"},null]}],"nop","\n","ev","void","/ev","->->",{"fa":[["ev",{"VAR?":"HP"},0,"<=","/ev",{"->":".^.b","c":true},{"b":["\n",{"->":"dead"},{"->":".^.^.^.2"},null]}],["ev",{"VAR?":"hp"},0,"<=","/ev",{"->":".^.b","c":true},{"b":["\n","^你击杀了敌人！ ","ev","void","/ev","->->","\n",{"->":".^.^.^.2"},null]}],"nop","\n","^你的血量","ev",{"VAR?":"HP"},"out","/ev","\n","^敌人血量","ev",{"VAR?":"hp"},"out","/ev","\n","ev",1,6,"rnd","/ev",{"VAR=":"DE","re":true},"\n","ev",1,6,"rnd","/ev",{"VAR=":"de","re":true},"\n","ev",1,3,"rnd","/ev",{"VAR=":"ey","re":true},"\n",["ev",{"VAR?":"ey"},1,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^敌人选择攻击，你选择","<>","\n",["ev",{"^->":"fight.fa.37.b.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^攻击",{"->":"$r","var":true},null]}],["ev",{"^->":"fight.fa.37.b.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^防御",{"->":"$r","var":true},null]}],["ev",{"^->":"fight.fa.37.b.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^闪避",{"->":"$r","var":true},null]}],{"->":".^.^.^.40"},{"c-0":["ev",{"^->":"fight.fa.37.b.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","^我方","ev",{"VAR?":"DE"},"out","/ev","^+","ev",{"VAR?":"ATK"},"out","/ev","\n","^敌方","ev",{"VAR?":"de"},"out","/ev","^+","ev",{"VAR?":"atk"},"out","/ev","\n",["ev",{"VAR?":"DE"},{"VAR?":"ATK"},"+",{"VAR?":"de"},{"VAR?":"atk"},"+",">","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"hp"},{"VAR?":"DE"},{"VAR?":"ATK"},"+","-",{"VAR=":"hp","re":true},"/ev","^你对敌人造成了","ev",{"VAR?":"DE"},{"VAR?":"ATK"},"+","out","/ev","^点伤害。","\n",{"->":".^.^.^.32"},null]}],["ev",{"VAR?":"DE"},{"VAR?":"ATK"},"+",{"VAR?":"de"},{"VAR?":"atk"},"+","<","/ev",{"->":".^.b","c":true},{"b":["\n","^敌人对你造成了","ev",{"VAR?":"de"},{"VAR?":"atk"},"+","out","/ev","^点伤害。","\n","ev",{"VAR?":"HP"},{"VAR?":"de"},{"VAR?":"atk"},"+","-",{"VAR=":"HP","re":true},"/ev",{"->":".^.^.^.32"},null]}],[{"->":".^.b"},{"b":["\n","^相持!","\n",{"->":".^.^.^.32"},null]}],"nop",{"->":"fight.fa"},"\n",{"#f":5}],"c-1":["ev",{"^->":"fight.fa.37.b.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","^我方","ev",{"VAR?":"DE"},"out","/ev","^+","ev",{"VAR?":"DEF"},"out","/ev","\n","^敌方","ev",{"VAR?":"de"},"out","/ev","^+","ev",{"VAR?":"atk"},"out","/ev","\n",["ev",{"VAR?":"DE"},{"VAR?":"DEF"},"+",{"VAR?":"de"},{"VAR?":"atk"},"+",">=","/ev",{"->":".^.b","c":true},{"b":["\n","^敌人对你造成了0点伤害。","\n",{"->":".^.^.^.31"},null]}],["ev",{"VAR?":"DE"},{"VAR?":"DEF"},"+",{"VAR?":"de"},{"VAR?":"atk"},"+","<","/ev",{"->":".^.b","c":true},{"b":["\n","^敌人对你造成了","ev",{"VAR?":"de"},{"VAR?":"atk"},{"VAR?":"DE"},"-","+","out","/ev","^点伤害。","\n","ev",{"VAR?":"HP"},{"VAR?":"de"},{"VAR?":"atk"},{"VAR?":"DE"},"-","+","-",{"VAR=":"HP","re":true},"/ev",{"->":".^.^.^.31"},null]}],"nop",{"->":"fight.fa"},"\n",{"#f":5}],"c-2":["ev",{"^->":"fight.fa.37.b.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","^我方","ev",{"VAR?":"DE"},"out","/ev","^+","ev",{"VAR?":"DOD"},"out","/ev","\n","^敌方","ev",{"VAR?":"de"},"out","/ev","^+","ev",{"VAR?":"atk"},"out","/ev","\n",["ev",{"VAR?":"DE"},{"VAR?":"DOD"},"+",{"VAR?":"de"},{"VAR?":"atk"},"+",">=","/ev",{"->":".^.b","c":true},{"b":["\n","^你闪避了敌人的攻击！","\n",{"->":".^.^.^.31"},null]}],["ev",{"VAR?":"DE"},{"VAR?":"DOD"},"+",{"VAR?":"de"},{"VAR?":"atk"},"+","<","/ev",{"->":".^.b","c":true},{"b":["\n","^敌人对你造成了","ev",{"VAR?":"de"},{"VAR?":"atk"},"+","out","/ev","^点伤害。","\n","ev",{"VAR?":"HP"},{"VAR?":"de"},{"VAR?":"atk"},"+","-",{"VAR=":"HP","re":true},"/ev",{"->":".^.^.^.31"},null]}],"nop",{"->":"fight.fa"},"\n",{"#f":5}]}]}],["ev",{"VAR?":"ey"},2,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^敌人选择防御，你选择","<>","\n",["ev",{"^->":"fight.fa.38.b.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^攻击",{"->":"$r","var":true},null]}],["ev",{"^->":"fight.fa.38.b.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^防御",{"->":"$r","var":true},null]}],["ev",{"^->":"fight.fa.38.b.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^闪避",{"->":"$r","var":true},null]}],{"->":".^.^.^.40"},{"c-0":["ev",{"^->":"fight.fa.38.b.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","^我方","ev",{"VAR?":"DE"},"out","/ev","^+","ev",{"VAR?":"ATK"},"out","/ev","\n","^敌方","ev",{"VAR?":"de"},"out","/ev","^+","ev",{"VAR?":"def"},"out","/ev","\n",["ev",{"VAR?":"DE"},{"VAR?":"ATK"},"+",{"VAR?":"de"},{"VAR?":"def"},"+",">","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"hp"},{"VAR?":"DE"},{"VAR?":"ATK"},{"VAR?":"de"},"-",{"VAR?":"def"},"-","+","-",{"VAR=":"hp","re":true},"/ev","^你对敌人造成了","ev",{"VAR?":"DE"},"out","/ev","^点伤害。","\n",{"->":".^.^.^.31"},null]}],[{"->":".^.b"},{"b":["\n","^DE+ATK =<de+def:","\n","^你击穿不了敌人的护甲！。","\n",{"->":".^.^.^.31"},null]}],"nop",{"->":"fight.fa"},"\n",{"#f":5}],"c-1":["ev",{"^->":"fight.fa.38.b.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","^无事发生··· ",{"->":"fight.fa"},"\n",{"#f":5}],"c-2":["ev",{"^->":"fight.fa.38.b.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","^无事发生··· ",{"->":"fight.fa"},"\n",{"#f":5}]}]}],["ev",{"VAR?":"ey"},3,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^敌人选择闪避，你选择","<>","\n",["ev",{"^->":"fight.fa.39.b.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^攻击",{"->":"$r","var":true},null]}],["ev",{"^->":"fight.fa.39.b.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^防御",{"->":"$r","var":true},null]}],["ev",{"^->":"fight.fa.39.b.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^闪避",{"->":"$r","var":true},null]}],{"->":".^.^.^.40"},{"c-0":["ev",{"^->":"fight.fa.39.b.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","^我方","ev",{"VAR?":"DE"},"out","/ev","^+","ev",{"VAR?":"ATK"},"out","/ev","\n","^敌方","ev",{"VAR?":"de"},"out","/ev","^+","ev",{"VAR?":"dod"},"out","/ev","\n",["ev",{"VAR?":"DE"},{"VAR?":"ATK"},"+",{"VAR?":"de"},{"VAR?":"dod"},"+",">","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"hp"},{"VAR?":"DE"},{"VAR?":"ATK"},"+","-",{"VAR=":"hp","re":true},"/ev","^你对敌人造成了","ev",{"VAR?":"DE"},{"VAR?":"ATK"},"+","out","/ev","^点伤害。","\n",{"->":".^.^.^.31"},null]}],[{"->":".^.b"},{"b":["\n","^DE+ATK =<de+dod:","\n","^你没有命中敌人！","\n",{"->":".^.^.^.31"},null]}],"nop",{"->":"fight.fa"},"\n",{"#f":5}],"c-1":["ev",{"^->":"fight.fa.39.b.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","^无事发生··· ",{"->":"fight.fa"},"\n",{"#f":5}],"c-2":["ev",{"^->":"fight.fa.39.b.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n","^无事发生··· ",{"->":"fight.fa"},"\n",{"#f":5}]}]}],"nop","\n",{"#f":1}],"fb":[[["ev",{"VAR?":"HP"},0,"<=","/ev",{"->":".^.b","c":true},{"b":["\n",{"->":"dead"},{"->":".^.^.^.2"},null]}],["ev",{"VAR?":"hp"},0,"<=","/ev",{"->":".^.b","c":true},{"b":["\n","^你击杀了敌人！ ","ev","void","/ev","->->","\n",{"->":".^.^.^.2"},null]}],"nop","\n","^你的血量","ev",{"VAR?":"HP"},"out","/ev","\n","^敌人血量","ev",{"VAR?":"hp"},"out","/ev","\n","ev",1,6,"rnd","/ev",{"VAR=":"DE","re":true},"\n","ev",1,6,"rnd","/ev",{"VAR=":"de","re":true},"\n","ev",1,3,"rnd","/ev",{"VAR=":"ey","re":true},"\n","^你选择","<>","\n",["ev",{"^->":"fight.fb.0.40.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^攻击",{"->":"$r","var":true},null]}],["ev",{"^->":"fight.fb.0.41.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^防御",{"->":"$r","var":true},null]}],["ev",{"^->":"fight.fb.0.42.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^闪避",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"fight.fb.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.40.s"},[{"#n":"$r2"}],"\n","<>","^，敌人选择","<>","\n",["ev",{"VAR?":"ey"},1,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^攻击","\n","^我方","ev",{"VAR?":"DE"},"out","/ev","^+","ev",{"VAR?":"ATK"},"out","/ev","\n","^敌方","ev",{"VAR?":"de"},"out","/ev","^+","ev",{"VAR?":"atk"},"out","/ev","\n",["ev",{"VAR?":"DE"},{"VAR?":"ATK"},"+",{"VAR?":"de"},{"VAR?":"atk"},"+",">","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"hp"},{"VAR?":"DE"},{"VAR?":"ATK"},"+","-",{"VAR=":"hp","re":true},"/ev","^你对敌人造成了","ev",{"VAR?":"DE"},{"VAR?":"ATK"},"+","out","/ev","^点伤害。","\n",{"->":".^.^.^.28"},null]}],["ev",{"VAR?":"DE"},{"VAR?":"ATK"},"+",{"VAR?":"de"},{"VAR?":"atk"},"+","<","/ev",{"->":".^.b","c":true},{"b":["\n","^敌人对你造成了","ev",{"VAR?":"de"},{"VAR?":"atk"},"+","out","/ev","^点伤害。","\n","ev",{"VAR?":"HP"},{"VAR?":"de"},{"VAR?":"atk"},"+","-",{"VAR=":"HP","re":true},"/ev",{"->":".^.^.^.28"},null]}],[{"->":".^.b"},{"b":["\n","^相持!","\n",{"->":".^.^.^.28"},null]}],"nop",{"->":"fight.fb"},"\n",{"->":".^.^.^.14"},null]}],["ev",{"VAR?":"ey"},2,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^防御","\n","^我方","ev",{"VAR?":"DE"},"out","/ev","^+","ev",{"VAR?":"ATK"},"out","/ev","\n","^敌方","ev",{"VAR?":"de"},"out","/ev","^+","ev",{"VAR?":"def"},"out","/ev","\n",["ev",{"VAR?":"DE"},{"VAR?":"ATK"},"+",{"VAR?":"de"},{"VAR?":"def"},"+",">","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"hp"},{"VAR?":"DE"},{"VAR?":"ATK"},{"VAR?":"de"},"-",{"VAR?":"def"},"-","+","-",{"VAR=":"hp","re":true},"/ev","^你对敌人造成了","ev",{"VAR?":"DE"},"out","/ev","^点伤害。","\n",{"->":".^.^.^.27"},null]}],[{"->":".^.b"},{"b":["\n","^DE+ATK =<de+def:","\n","^你击穿不了敌人的护甲！。","\n",{"->":".^.^.^.27"},null]}],"nop",{"->":"fight.fb"},"\n",{"->":".^.^.^.14"},null]}],["ev",{"VAR?":"ey"},3,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^闪避","\n","^我方","ev",{"VAR?":"DE"},"out","/ev","^+","ev",{"VAR?":"ATK"},"out","/ev","\n","^敌方","ev",{"VAR?":"de"},"out","/ev","^+","ev",{"VAR?":"dod"},"out","/ev","\n",["ev",{"VAR?":"DE"},{"VAR?":"ATK"},"+",{"VAR?":"de"},{"VAR?":"dod"},"+",">","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"hp"},{"VAR?":"DE"},{"VAR?":"ATK"},"+","-",{"VAR=":"hp","re":true},"/ev","^你对敌人造成了","ev",{"VAR?":"DE"},"out","/ev","^点伤害。","\n",{"->":".^.^.^.27"},null]}],[{"->":".^.b"},{"b":["\n","^DE+ATK =<de+dod:","\n","^你击穿不了敌人的护甲！。","\n",{"->":".^.^.^.27"},null]}],"nop",{"->":"fight.fb"},"\n",{"->":".^.^.^.14"},null]}],"nop","\n",{"#f":5}],"c-1":["ev",{"^->":"fight.fb.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.41.s"},[{"#n":"$r2"}],"\n","<>","^，敌人选择","<>","\n",["ev",{"VAR?":"ey"},1,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^攻击","\n","^我方","ev",{"VAR?":"DE"},"out","/ev","^+","ev",{"VAR?":"DEF"},"out","/ev","\n","^敌方","ev",{"VAR?":"de"},"out","/ev","^+","ev",{"VAR?":"atk"},"out","/ev","\n",["ev",{"VAR?":"DE"},{"VAR?":"DEF"},"+",{"VAR?":"de"},{"VAR?":"atk"},"+",">=","/ev",{"->":".^.b","c":true},{"b":["\n","^敌人对你造成了0点伤害。","\n",{"->":".^.^.^.27"},null]}],["ev",{"VAR?":"DE"},{"VAR?":"DEF"},"+",{"VAR?":"de"},{"VAR?":"atk"},"+","<","/ev",{"->":".^.b","c":true},{"b":["\n","^敌人对你造成了","ev",{"VAR?":"de"},{"VAR?":"atk"},{"VAR?":"DE"},"-","+","out","/ev","^点伤害。","\n","ev",{"VAR?":"HP"},{"VAR?":"de"},{"VAR?":"atk"},{"VAR?":"DE"},"-","+","-",{"VAR=":"HP","re":true},"/ev",{"->":".^.^.^.27"},null]}],"nop",{"->":"fight.fb"},"\n",{"->":".^.^.^.14"},null]}],["ev",{"VAR?":"ey"},2,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^防御","\n","^无事发生··· ",{"->":"fight.fb"},"\n",{"->":".^.^.^.14"},null]}],["ev",{"VAR?":"ey"},3,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^闪避","\n","^无事发生··· ",{"->":"fight.fb"},"\n",{"->":".^.^.^.14"},null]}],"nop","\n",{"#f":5}],"c-2":["ev",{"^->":"fight.fb.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.42.s"},[{"#n":"$r2"}],"\n","<>","^，敌人选择","<>","\n",["ev",{"VAR?":"ey"},1,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^攻击","\n","^我方","ev",{"VAR?":"DE"},"out","/ev","^+","ev",{"VAR?":"DOD"},"out","/ev","\n","^敌方","ev",{"VAR?":"de"},"out","/ev","^+","ev",{"VAR?":"atk"},"out","/ev","\n",["ev",{"VAR?":"DE"},{"VAR?":"DOD"},"+",{"VAR?":"de"},{"VAR?":"atk"},"+",">=","/ev",{"->":".^.b","c":true},{"b":["\n","^你闪避了敌人的攻击！","\n",{"->":".^.^.^.27"},null]}],["ev",{"VAR?":"DE"},{"VAR?":"DOD"},"+",{"VAR?":"de"},{"VAR?":"atk"},"+","<","/ev",{"->":".^.b","c":true},{"b":["\n","^敌人对你造成了","ev",{"VAR?":"de"},{"VAR?":"atk"},"+","out","/ev","^点伤害。","\n","ev",{"VAR?":"HP"},{"VAR?":"de"},{"VAR?":"atk"},"+","-",{"VAR=":"HP","re":true},"/ev",{"->":".^.^.^.27"},null]}],"nop",{"->":"fight.fb"},"\n",{"->":".^.^.^.14"},null]}],["ev",{"VAR?":"ey"},2,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^防御","\n","^无事发生··· ",{"->":"fight.fb"},"\n",{"->":".^.^.^.14"},null]}],["ev",{"VAR?":"ey"},3,"==","/ev",{"->":".^.b","c":true},{"b":["\n","^闪避","\n","^无事发生··· ",{"->":"fight.fb"},"\n",{"->":".^.^.^.14"},null]}],"nop","\n",{"#f":5}]}],{"#f":1}],"#f":1}],"start":[["^在一片漆黑中，你缓缓睁开眼睛，四周是冰冷的石壁，空气中弥漫着些微潮湿与霉味。","\n","^你的头隐隐作痛，记忆如同被厚重的雾气笼罩，只隐约记得自己曾犯下了什么大罪，却被囚禁在这样一片看似不是很严守的囚牢中。","\n","^你试图起身，却发现手脚被铁链紧紧束缚。","\n","^恐惧与不安如潮水般涌来，但在这份恐惧中，又夹杂着一丝难以言喻的感觉。","\n","^是害怕？还是无奈，亦或许是兴奋？","\n","ev","str","^喘息片刻","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->t->":"music_a"},"^突然，一阵轻微的脚步声在空旷的走廊回响，随之而来的是一团轻微的灯光，你的心提到了嗓子眼。","\n","^一个模糊的身影在昏暗的灯光下摇曳，那扭曲的形状表明这就是一个恐怖的怪物。你本能地想要尖叫···","\n",["ev","str","^迅速闭嘴","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^放声尖叫","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^你对外界的事物本能地感受到畏惧，你迅速地闭上了嘴，身体颤抖，只留下微弱的喘息声。","\n","^那身影似乎并未注意到你，继续前行，很快便带着那盏小灯融入到黑暗中。","\n","ev",1,"/ev",{"VAR=":"scared","re":true},{"->":"cellA"},{"#f":5}],"c-1":["\n","^你没有抑制自己的情绪，尖叫起来，传来阵阵回声。得益于情感的释放，你心态似乎放平了一些。","\n","^那身影的主人似是扭头瞥了你一眼，紧接着，你听到了一声足以震慑绝大多数人的铁管敲击声，脑袋刹那间骤然一痛！","\n","^你失去了思考的能力。","\n","^转眼间，你看到了刀枪剑戟，看到了那一片片和你双手上一般颜色的暗红，你尝试拔出插在肚子上的长枪。","\n",["ev","str","^拔出长枪","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^自生自灭","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^正当你艰难地用手握住长枪，想要拔出来时，却发现身体已经失去了全部气力————一只箭正中你的心脏。","\n",{"->":"nightmare"},{"#f":5}],"c-1":["\n","^你失去了反抗之心，懦弱地放弃了,浑身的伤痕和腹部的流血给你带来了莫大的疼痛，在你失去意识的一瞬间！","\n","ev",1,"/ev",{"VAR=":"cowardly","re":true},{"->":"nightmare"},{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":1}],"nightmare":[["ev","str","^醒来","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^你从无限的恐惧中惊醒。","\n","^刚刚似乎————只是一场梦。","\n",{"->":"cellA"},{"#f":5}]}],{"#f":1}],"cellA":["^一段时间过后，你整理好了思绪，尝试稳定自己的思考，放眼看看现状。","\n","^现在的自己，似乎只有视线是自由的，手脚都被腐朽的铁链困住。","\n",{"->":".^.select"},{"select":[["ev","str","^看看四周","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^再次看看四周","/str",{"VAR?":"see"},{"VAR?":"scared"},"&&","/ev",{"*":".^.c-1","flg":5},"ev","str","^再次看看四周","/str",{"VAR?":"see"},{"VAR?":"scared"},"!","&&","/ev",{"*":".^.c-2","flg":5},"ev","str","^尝试挣脱铁链","/str","/ev",{"*":".^.c-3","flg":20},["ev",{"^->":"cellA.select.0.31.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"rid"},{"VAR?":"cowardly"},"&&","/ev",{"*":".^.^.c-4","flg":3},{"s":["^再次尝试挣脱铁链",{"->":"$r","var":true},null]}],["ev",{"^->":"cellA.select.0.32.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"rid"},{"VAR?":"cowardly"},"!","&&",{"VAR?":"ridof_chain"},2,"<=","&&","/ev",{"*":".^.^.c-5","flg":3},{"s":["^再次尝试挣脱铁链",{"->":"$r","var":true},null]}],["ev",{"^->":"cellA.select.0.33.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"rid"},{"VAR?":"cowardly"},"!","&&",{"VAR?":"ridof_chain"},3,"==","&&","/ev",{"*":".^.^.c-6","flg":3},{"s":["^再次尝试挣脱铁链",{"->":"$r","var":true},null]}],["ev",{"^->":"cellA.select.0.34.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"rid"},{"VAR?":"cowardly"},"!","&&",{"VAR?":"ridof_chain"},3,">","&&","/ev",{"*":".^.^.c-7","flg":3},{"s":["^再次尝试挣脱铁链",{"->":"$r","var":true},null]}],["ev",{"^->":"cellA.select.0.35.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"j"},3,"<","/ev",{"*":".^.^.c-8","flg":3},{"s":["^等待",{"->":"$r","var":true},null]}],{"c-0":["\n","^这里一片漆黑，可见度无限趋近于0。","\n","ev",1,"/ev",{"VAR=":"see","re":true},{"->":".^.^.^"},{"#f":5}],"c-1":["\n","^碍于自身对黑暗和未知的畏惧，你尝试望向那片黑暗，但砰砰跳的心让你无法长时间凝视黑暗，视线也有些模糊不清，只能看得清一些微微的光晕打在墙上。","\n",{"->":".^.^.^"},{"#f":5}],"c-2":["\n","^眼睛逐渐适应了黑暗，你依稀看得到眼前的牢房内部有简单陈设的木椅木桌，一个马桶和一个简单的书架。墙壁前有一束微光和一些圆柱状的影子，看起来似乎身后有一个窗户。","\n","^这束光似乎唤醒了你一点希望，你感觉精神得到了一丝丝慰藉，似是鼓起了勇气。","\n","^可惜牢房外面是真的一片漆黑，根本看不到什么东西。","\n","ev",3,"/ev",{"VAR=":"SAN","re":true},"ev",1,"/ev",{"VAR=":"i","re":true},{"->":".^.^.^"},{"#f":5}],"c-3":["\n","^不知道外面那怪物什么时候出现在牢房门口，你尝试用双手双脚挣脱铁链，手略略发疼，铁链吱呀作响，看起来还是很结实。","\n","^或许再大力点能够挣脱？","\n","ev",1,"/ev",{"VAR=":"rid","re":true},"ev",{"VAR?":"ridof_chain"},1,"+",{"VAR=":"ridof_chain","re":true},"/ev",{"->":".^.^.^"},{"#f":5}],"c-4":["ev",{"^->":"cellA.select.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.31.s"},[{"#n":"$r2"}],"\n","^你再稍微用力尝试几下后无果。","\n","^你的希望遭受打击。","\n","ev",{"VAR?":"DESIRE"},1,"-",{"VAR=":"DESIRE","re":true},"/ev",["ev",{"VAR?":"DESIRE"},0,"<=","/ev",{"->":".^.b","c":true},{"b":["\n",{"->":"despair"},{"->":".^.^.^.18"},null]}],"nop","\n",{"#f":5}],"c-5":["ev",{"^->":"cellA.select.0.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.32.s"},[{"#n":"$r2"}],"\n","^你再稍微用力尝试几下后",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^无果",{"->":".^.^.17"},null],"s1":["pop","^铁链似乎还是像往常那般",{"->":".^.^.17"},null],"#f":5}],"^。","\n","^得益于你的坚忍，你",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop",{"->":".^.^.17"},null],"s1":["pop","^咬了咬牙，",{"->":".^.^.17"},null],"#f":5}],"^仍然没有放弃。","\n","ev",{"VAR?":"ridof_chain"},1,"+",{"VAR=":"ridof_chain","re":true},"/ev",{"->":".^.^.^"},{"#f":5}],"c-6":["ev",{"^->":"cellA.select.0.c-6.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.33.s"},[{"#n":"$r2"}],"\n","^你的情绪逐渐出现了不甘，使劲用双手双脚挣扎，手脚都被勒出了深深的血痕，铁链最锈蚀的地方竟有破裂的痕迹！","\n","ev",{"VAR?":"ridof_chain"},1,"+",{"VAR=":"ridof_chain","re":true},"/ev",{"->":".^.^.^"},{"#f":5}],"c-7":["ev",{"^->":"cellA.select.0.c-7.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.34.s"},[{"#n":"$r2"}],"\n","^终于！双手的铁链应声被撕裂。手上的勒痕已经若有若无的发紫，渗出了血。","\n","^有了双手的帮助，双脚解放的更为迅速。","\n",{"->":"cellB"},{"#f":5}],"c-8":["ev",{"^->":"cellA.select.0.c-8.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.35.s"},[{"#n":"$r2"}],"\n",["ev","visit",2,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"nop",{"s0":["pop","^什么都没有发生。",{"->":".^.^.23"},null],"s1":["pop","^什么都没有发生。",{"->":".^.^.23"},null],"s2":["pop","^你觉得不能再坐以待毙了。",{"->":".^.^.23"},null],"#f":5}],"\n","ev",{"VAR?":"j"},1,"+",{"VAR=":"j","re":true},"/ev",{"->":".^.^.^"},{"#f":5}]}],{"#f":1}],"#f":1}],"cellB":[["ev",0,"/ev",{"VAR=":"j","re":true},"^你站起身来，活动了一下僵硬的身体，感觉自己的力量正在逐渐恢复。自身能够自由活动过后，你","\n","ev","str","^看看四周","/str",{"VAR?":"scared"},{"VAR?":"i"},0,"==","||","/ev",{"*":".^.c-0","flg":21},{"*":".^.c-1","flg":24},{"c-0":["\n","^眼睛逐渐适应了黑暗，你依稀看得到眼前的牢房内部物样的轮廓：","\n","^木椅木桌，一个马桶和一个简单的书架。","\n","^身后有一个透着光的窗户，和一张简陋的破床。","\n","^除此之外，再无他物。","\n","ev",1,"/ev",{"VAR=":"x","re":true},{"->":"cellC"},{"#f":5}],"c-1":[{"->":"cellC"},"\n",{"#f":5}]}],{"#f":1}],"cellC":[{"->":".^.select"},{"select":[[["ev",{"VAR?":"t"},3,"<","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"t"},1,"+",{"VAR=":"t","re":true},"/ev",{"->":".^.^.^.2"},null]}],["ev",{"VAR?":"t"},3,"==","/ev",{"->":".^.b","c":true},{"b":["\n",{"->":"fightA"},{"->":".^.^.^.2"},null]}],"nop","\n","ev","str","^观察牢房","/str",{"VAR?":"scared"},"!",{"VAR?":"x"},1,"==","||","/ev",{"*":".^.c-0","flg":5},"ev","str","^观察桌椅","/str",{"VAR?":"scared"},"!",{"VAR?":"x"},1,"==","||","/ev",{"*":".^.c-1","flg":5},"ev","str","^观察马桶","/str",{"VAR?":"scared"},"!",{"VAR?":"x"},1,"==","||","/ev",{"*":".^.c-2","flg":5},"ev","str","^观察书架","/str",{"VAR?":"scared"},"!",{"VAR?":"x"},1,"==","||","/ev",{"*":".^.c-3","flg":5},"ev","str","^观察破床","/str",{"VAR?":"scared"},"!",{"VAR?":"x"},1,"==","||","/ev",{"*":".^.c-4","flg":5},"ev","str","^观察窗户","/str",{"VAR?":"scared"},"!",{"VAR?":"x"},1,"==","||","/ev",{"*":".^.c-5","flg":5},"ev","str","^随身物品","/str",{"VAR?":"scared"},"!",{"VAR?":"x"},1,"==","||","/ev",{"*":".^.c-6","flg":5},{"c-0":["\n","^牢房还是一如既往的样子，破败，阴森，已经被黑暗吞噬殆尽。","\n","^紧张的感觉笼罩着你，但你却无法集中精力。","\n","^还是先去看看其他东西吧。万一这期间又遇到怪物了呢？","\n",{"->":".^.^.^"},{"#f":5}],"c-1":["\n",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^凑近一看，这大概是一个",{"->":".^.^.17"},null],"s1":["pop","^这是一个",{"->":".^.^.17"},null],"#f":5}],"^简单陈设的木桌木椅，木桌下方有两个抽屉，上方",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^则",{"->":".^.^.17"},null],"s1":["pop","^曾",{"->":".^.^.17"},null],"#f":5}],"^摆着一只笔和一张纸。","\n",["ev","str","^拾取笔","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^拾取纸","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^查看抽屉","/str",{"VAR?":"key_dear"},"!","/ev",{"*":".^.c-2","flg":5},"ev","str","^离开","/str","/ev",{"*":".^.c-3","flg":4},{"c-0":["\n","^你把笔装到了兜里。","\n","ev",{"VAR?":"pen"},1,"+",{"VAR=":"pen","re":true},"/ev",{"->":".^.^.^"},{"#f":5}],"c-1":["\n","^你把纸装到了兜里。","\n","ev",{"VAR?":"paper"},1,"+",{"VAR=":"paper","re":true},"/ev",{"->":".^.^.^"},{"#f":5}],"c-2":["\n","^左边的抽屉里什么都没有，只有一些划手的木屑，右边的抽屉上了锁。","\n",{"->":".^.^.^"},["ev","str","^打开右边抽屉","/str",{"VAR?":"key_dear"},"/ev",{"*":".^.c-0","flg":21},{"c-0":["\n","^你从右边的抽屉摸到了一卷胶带和一把剪刀，你不知道为什么它们会在这里，难道是工人修理落下的吗？抱着能用则用的心情，你拿走了这两件物品。","\n",{"->":".^.^.^.^.^"},{"#f":5}]}],{"#f":5}],"c-3":["\n","^你离开了桌边。","\n",{"->":".^.^.^.^.^"},{"#f":5}]}],{"#f":5}],"c-2":["\n","^漆黑一片的马桶让你本能地不想深查。","\n","^等到有灯了再查看吧。","\n",{"->":".^.^.^"},{"#f":5}],"c-3":["\n","^书架上面零星地躺着几本封皮平滑的书，这些书比较大，难以装进兜里。但···","\n","^或许可以用来砸呢？","\n","ev",1,"/ev",{"VAR=":"book","re":true},{"->":".^.^.^"},{"#f":5}],"c-4":["\n","^床上的被子是散乱的，你断定这是有着生活痕迹的情况，但你的记忆中却鲜有与其相关的经历。","\n","^这里似乎有别人住过？","\n","^看着墙边的床，你不自觉地认为，躺上去，便会遁入黑暗。","\n",{"->":".^.^.^"},{"#f":5}],"c-5":["\n","^窗子被几个铁柱拦住，只能透过较大的缝隙窥见外界,但至少你的目光有了落脚地，你不自觉地感到了安心。","\n","^你望向窗外，映入眼帘的是一片没有星星的夜空，和牢房内一样十分寂静",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop",{"->":".^.^.17"},null],"s1":["pop","^，甚至有点反常————为什么会这么静？",{"->":".^.^.17"},null],"#f":5}],"^。","\n",["ev",{"VAR?":"SAN"},3,"==","/ev",{"->":".^.b","c":true},{"b":["\n","ev",5,"/ev",{"VAR=":"SAN","re":true},{"->":".^.^.^.9"},null]}],[{"->":".^.b"},{"b":["\n","ev",2,"/ev",{"VAR=":"SAN","re":true},{"->":".^.^.^.9"},null]}],"nop","\n",{"->":".^.^.^"},{"#f":5}],"c-6":["\n",{"->t->":"objects"},{"->":".^.^.^"},{"#f":5}]}],{"#f":1}],"#f":1}],"fightA":[{"->t->":"music_c"},"ev",{"VAR?":"t"},1,"+",{"VAR=":"t","re":true},"/ev","^就在你做动作的时候，眼边传来了一阵黄光，","<>","\n",["ev",{"VAR?":"scared"},"/ev",{"->":".^.b","c":true},{"b":["\n",{"->":"fightB"},{"->":"fightA.13"},null]}],["ev",{"VAR?":"SAN"},5,">=","/ev",{"->":".^.b","c":true},{"b":["\n",{"->":"fightK"},{"->":"fightA.13"},null]}],[{"->":".^.b"},{"b":["\n",{"->":"fightC"},{"->":"fightA.13"},null]}],"nop","\n",{"#f":1}],"fightB":["^你身体猛地一颤，意识到现状的异常。","\n","^你望向牢房大门的方向，首先看到的就是一个极其巨大的黑影，你的大脑再一次传来一阵疼痛，你对眼前的景象感到十分畏惧，当场跪倒在地。","\n","ev",{"VAR?":"SAN"},1,"-",{"VAR=":"SAN","re":true},"/ev",["ev",{"VAR?":"SAN"},0,"==","/ev",{"->":".^.b","c":true},{"b":["\n",{"->":"crazy"},{"->":"fightB.11"},null]}],"nop","\n","^你稳住了身形，勉勉强强站了起来，再一次尝试面对它。、","\n","^眼下，只有战斗了！","\n",{"->t->":"fight"},"^只做了第一章呜呜","\n","end",{"#f":1}],"fightC":["^你瞬间感知到了现状的异常。","\n","^你望向牢房大门的方向，看到一个巨大的黑影，巨影的主人似乎散发着诡异的红色气息，你不自觉地退了半步。","\n","^似乎是被它看到了。他拿出一根棍状物，眼看就是要敲击牢房前的铁柱————","\n",{"->t->":"fight"},"^只做了第一章呜呜","\n","end",{"#f":1}],"fightK":["^你感到疑惑，但随即意识到现状的异常。","\n","^你望向牢房大门的方向，看到一个拿着提灯的人朝你走来","\n",{"->":".^.select"},{"select":[["ev","str","^向他问话","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^沉默不语","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":".^.^.^"},{"#f":5}],"c-1":["\n","^只做了第一章呜呜","\n","end",{"#f":5}]}],{"#f":1}],"#f":1}],"global decl":["ev",0,{"VAR=":"see"},0,{"VAR=":"rid"},0,{"VAR=":"book"},0,{"VAR=":"bed"},0,{"VAR=":"t"},1,{"VAR=":"DE"},20,{"VAR=":"HP"},5,{"VAR=":"ATK"},0,{"VAR=":"DEF"},5,{"VAR=":"DOD"},5,{"VAR=":"V"},1,{"VAR=":"DESIRE"},1,{"VAR=":"SAN"},1,{"VAR=":"de"},30,{"VAR=":"hp"},3,{"VAR=":"atk"},4,{"VAR=":"def"},0,{"VAR=":"dod"},3,{"VAR=":"v"},1,{"VAR=":"ey"},0,{"VAR=":"scared"},0,{"VAR=":"cowardly"},0,{"VAR=":"pen"},0,{"VAR=":"paper"},0,{"VAR=":"sword"},0,{"VAR=":"shield"},0,{"VAR=":"magic"},0,{"VAR=":"knife"},0,{"VAR=":"tape"},0,{"VAR=":"scissor"},0,{"VAR=":"key_dear"},0,{"VAR=":"i"},0,{"VAR=":"j"},0,{"VAR=":"ridof_chain"},0,{"VAR=":"x"},"/ev","end",null],"#f":1}],"listDefs":{}};