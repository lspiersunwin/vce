import React from "react"
import { Layout } from "../components"
import styled from "styled-components"
import Title from "../components/Title"
import Image from "gatsby-image"

const References = ({ data }) => {
  const fluid = data.file.childImageSharp.fluid
  return (
    <Wrapper>
      <Layout>
        <div>
          <Title title="References"></Title>
        </div>
        <section className="single-article">
          <article>
            <p>
              Wherever do I start to offer thanks after so many years of
              research and writing, I have I am embarrased to say, forgotten
              many wonderful people who encouraged me and offered help and
              advice, there are so many that had pctures I have used and I have
              tried hard to get any permissions that may be required, the only
              refusal and rude response I ever got, was from the Naval and
              Military Press, publisher of the late David Harvey's wonderful
              book, I bet he is turning in his grave at the rudeness being shown
              to anyone who has asked for permission to reproduce a picture or
              two, why would they refuse? - who knows, its only a book about
              valour, and I have made it clear that 50% of any profits made
              after expenses would go to the VC and GC Assiociation......but all
              to no avail, however, everyone else I approached responded
              positively and helpfully, following are juat a few of hundreds:-
            </p>
            <br />
            <p>People in no particular order:</p>
            <br />
            <p>
              Viv Rudd, Mick Holtby, Iain Stewart, Terry Mcdonald, Phil Payne,
              Peter Bennett, Luigi Sartorel, Marion Hebblethwaite, Dave Horsley,
              Bryan Vousden, Paul Woodness, Neil Hutton, Scott Chapman, John
              Young, Simon Manchee, Simon Clabon, Gerald Napier - Royal
              Engineers Library, Spartacus Internet, Kevin Patience, Gallagher
              Cards, D. Blyth, A. Peters, G. Evans, Kevin Brazier, Robert
              Anderson, E. Skytte, MLJM Murray, Donald McInnes, J. Griffith,
              Richard Arman.
            </p>
            <br />

            <p>References and recommended reading in no particular order:</p>
            <br />
            <p>
              The New Zealand Wars: and the Victorian Interpretation of Racial
              Conflict – J. Belich.
            </p>

            <ul>
              <li>Rorke's Drift – A. Greaves.</li>
              <li>
                Zulu Rising: The Epic Story of Isandlwana and Rorke's Drift – I.
                Knight.
              </li>
              <li>
                The book of the V.C.; a record of the deeds of heroism for which
                the Victoria cross has been bestowed, from its institution in
                1857 to the present time – A. L. Haydon.
              </li>
              <li>
                Memories of Forty-Eight Years Service - Sir Horace Smith-Dorien.
              </li>
              <li>
                There are several books that can tell you more about the Second
                Afghan War. One of the most up to date and useful is Brian
                Robson's 'The Road to Kabul'. For general information on the
                British in Afghanistan I can recommend Michael Barthorp's
                'Afghan Wars and the North-West Frontier 1839 – 1947'.
              </li>
              <li>Four Months Besieged - H. H. S. Pearse.</li>
              <li>The Gibraltar Magazine.</li>
              <li>
                The Life of Field-Marshal Sir George White VC – H M Durand.
              </li>
              <li>The RAMC Journal.</li>
              <li>Admiralty Salvage in Peace and War – T. Booth.</li>
              <li>
                Field Marshal Sir Henry Wilson: A Political Soldier – K.
                Jeffery.
              </li>
              <li>
                The British Admirals of the Fleet 1734–1995 – T. Heathcote.
              </li>
              <li>
                The Habit of Victory: The Story of the Royal Navy 1545 to 1945 –
                P. Hore.
              </li>
              <li>Naval Battles of the First World War – G. Bennett.</li>
              <li>Jutland: An Analysis of the Fighting – N. J. M Campbell.</li>
              <li>
                Through the Hawse Pipe – Battle of Jutland Memorial – Capt. A.
                Grant.
              </li>
              <li>
                From Trench and Turret: Royal Marines' Letters and Diaries
                1914-1918 – S. M Holloway.
              </li>
              <li>Architect of Victory: Douglas Haig – W. Reid.</li>
              <li>
                Unfaded Glory: The 8th Punjab Regiment 1798-1956 - Rifat Nadeem,
                and Maj Gen Rafiuddin.
              </li>
              <li>
                The Gurkhas: The Inside Story of the World's Most Feared
                Soldiers – J. Parker.
              </li>
              <li>Remember Mazoe – G. Bond.</li>
              <li>
                The Story of the Malakand Field Force – Winston Churchill.
              </li>
              <li>
                A Frontier Campaign: A Narrative of the Operations of the
                Malakand and Buner Field Forces, 1897–1898 – Fincastle.
              </li>
              <li>The History of the Victoria Cross – P. A. Wilkins.</li>
              <li>The Victoria Cross 1856-1920 – Hayward.</li>

              <li>
                The Scottish soldier and empire, 1854–1902 – E. M. Spiers.
              </li>
              <li>Piper Findlater, V.C.: The Hero of Dargai – C. Cross.</li>
              <li>Bloody Red Tabs – F. Davies and G. Maddocks.</li>
              <li>Liverpool VC's – J. Murphy.</li>
              <li>
                The Last Charge: the 21st Lancers and the Battle of Omdurman –
                T. Brighton.
              </li>
              <li>The Great Boer War – A. C. Doyle.</li>
              <li>The Great Boer War – B. Farwell.</li>
              <li>Battles of the Boer War – Pemberton.</li>
              <li>The Boer War – T. Pakenham.</li>
              <li>
                Mafeking diary: a black man's view of a white man's war – Sol
                Plaatje.
              </li>

              <li>Scapegoats of the Empire – G. Witton.</li>
              <li>The Forgotten War’- L. Field.</li>
              <li>‘Shoot Straight you Bastards!’ - Nick Bleszynski,</li>
              <li>
                The Glorious Madness, Tales of The Irish and The Great War – T.
                Bunbury.
              </li>
              <li>
                Medical Recipients of the Victoria Cross during the Anglo-Boer
                War – J. C. De Villiers and C. V. Small.
              </li>
              <li>
                The history of the South African forces in France – J. Buchan.
              </li>
              <li>
                Anzac Doctor: the Life of Sir Neville Howse, VC – S. Braga.
              </li>
              <li>The Life of Sir Neville Howse, VC – S. Braga.</li>
              <li>
                Neville Howse: Australia's First Victoria Cross Winner – M. B.
                Tyquin.
              </li>
              <li>
                Little by Little: a Centenary History of the Royal Australian
                Army Medical Corps – M. B. Tyquin.
              </li>

              <li>The Spirit of the Digger – Then & Now – P. Lindsay.</li>
              <li>
                Looking Forward, Looking Back: Customs and Traditions of the
                Australian Army – C. Jobson.
              </li>
              <li>
                Mad Harry: Australia's Most Decorated Soldier – G. Franki and C.
                Slatyer.
              </li>
              <li>
                Bravest: How Some of Australia's War Heroes Won Their Medals –
                R. Macklin.
              </li>
              <li>
                Welcome to Flanders Fields: The First Canadian Battle of the
                Great War: Ypres, 1915 – D. G. Dancock.
              </li>
              <li>Beyond Courage – G. Cassar.</li>
              <li>
                Canada and the South African War – 1899-1902 – Canadian War
                Museum.
              </li>
              <li>Shilling Extra – B & P Kennedy.</li>
              <li>The Boxer Rebellion. – D. Preston.</li>
              <li>
                Dragon Lady: The Life and Legend of the Last Empress of China. –
                S. Seagrave.
              </li>

              <li>
                The Dragon Empress The Life and Times of Tz'u-hsi, 1835-1908,
                Empress Dowager of China. - M. Warner.
              </li>
              <li>The Siege – R. Braddon.</li>
              <li>The Unveiling of Lhasa – E. Candler.</li>
              <li>
                Officers Gentlemen and Thieves: The Looting of Monasteries
                during the 1903/4 Younghusband Mission to Tibet – M. Carrington.
              </li>
              <li>
                Duel in the Snows:The True Story of the Younghusband Mission to
                Lhasa – C. Allen.
              </li>
              <li>Bayonets to Lhasa – P. Fleming.</li>
              <li>
                Younghusband: the Last Great Imperial Adventurer – P. French.
              </li>
              <li>
                Small Wars and Skirmishes, 1902-18: early twentieth-century
                colonial campaigns in Africa, Asia, and the Americas – E.
                Herbert.
              </li>
              <li>
                Tibet and the British Raj: The Frontier Cadre 1904–1947 – A.
                McKay.
              </li>
              <li>
                Journeys to Empire . Enlightenment, Imperialism, and the British
                Encounter with Tibet 1774 – 1904 – G. T. Stewart.
              </li>

              <li>
                Military Heritage did a feature of the Battle of Mons and the
                Angels of Mons (R B Smith, Military Heritage, August 2005,
                Volume 7, No. 1, p. 14, p. 16, p. 17, and p. 76).{" "}
              </li>
              <li>Battles of World War I – M M Evans.</li>
              <li>
                Mons 1914: The BEF's Tactical Triumph .Campaign – D Lomas.
              </li>
              <li>
                The Advance from Mons 1914: The Experiences of a German Infantry
                Officer – W. Bloem.
              </li>
              <li>The Irish Sword – B. Clarke.</li>
              <li>Private Sidney Godley VC – I. Tidey.</li>
              <li>
                1st Battalion the Middlesex Regiment – Retreat from Mons – H.
                Anderson.
              </li>
              <li>The Affair at Nery - 1 September 1914 – P. Firsted.</li>
              <li>
                1st Battalion the Middlesex Regiment in Action at Nery – 1
                September 1914 – P. Firsted.
              </li>
              <li>
                Battle Honours of the British and Commonwealth Armies – A.
                Baker.
              </li>

              <li>Mons, Retreat to Victory – J. Terraine.</li>
              <li>
                Irish Winners of the Victoria Cross – R. Doherty & D. Truesdale.
              </li>
              <li>The First World War – J. Keegan.</li>
              <li>
                1914-1918: The History of the First World War – D. Stevenson.
              </li>
              <li>
                1914-1918: The History of the First World War – D. Stevenson.
              </li>
              <li>
                The Fourth Battalion, Duke of Connaught's Own, Tenth Baluch
                Regiment in the Great War – W.S. Thatcher.
              </li>
              <li>
                History of 11th Battalion, the Baluch Regiment – I.A. Qureshi.
              </li>
              <li>
                Playing with Strife, The Autobiography of a Soldier - Lt-Gen.
                Sir Philip Neame, V.C.
              </li>
              <li>Windsock Datafile No.44, Bristol Scouts - J M Bruce.</li>
              <li>The First of the Few – D. Winter.</li>

              <li>
                Difficulties Be Damned: The King's Regiment – A History of the
                City Regiment of Manchester and Liverpool – P. Mileham.
              </li>
              <li>
                The History of the King's Regiment .Liverpool 1914–19 – E.
                Wyrall.
              </li>
              <li>The Frist Day of the Somme – M. Middlebrook.</li>
              <li>Somme 1916 – L. Macdonald.</li>
              <li>The 1916 Battle of the Somme – P. Liddle.</li>
              <li>The Somme – G. Sheffield.</li>
              <li>
                The Somme: Heroism and Horror in the First World War – M.
                Gilbert.
              </li>
              <li>Fields of Memory – A. Roze.</li>
              <li>
                Happy Odyssey - The Memoirs of Lieutenant-General Sir Adrian
                Carton de Wiart. - A. Carton de Wiart.
              </li>
              <li>
                The Biographical Dictionary of World War II. - M. M. Boatner
                III.
              </li>

              <li>
                To War With Whitaker, The Wartime Diaries of the Countess of
                Ranfurly 1939-1945.
              </li>
              <li>
                White Eagle, Red Star: The Polish-Soviet War 1919-1920 and "The
                Miracle on the Vistula" – N. Davies.
              </li>
              <li>
                Victoria Cross winners of New Zealand - W. M. Chamberlain.
              </li>
              <li>
                Where the prize is highest: New Zealanders who have won the
                Victoria Cross – G. A. Bryant.
              </li>
              <li>
                From the Uttermost Ends of the Earth: The New Zealand Division
                on the Western Front 1916 – 1918 – J. H. Gray.
              </li>
              <li>
                In the Face of the Enemy: The Complete History of the Victoria
                Cross and New Zealand – G. Harper & C. Richardson.
              </li>
              <li>
                Honours and Awards to the New Zealand Expeditionary Force in the
                Great War 1914–1918 - W. Macdonald.
              </li>
              <li>
                New Zealand Battlefields and Memorials of the Western Front – I.
                McGibbon.
              </li>
              <li>
                The Oxford Companion to New Zealand Military History – I.
                McGibbon [ED].
              </li>
              <li>
                Great Tales from New Zealand History – G. McLauchlan - [The
                Maori VC Winner from Harrow and Cambridge; Chapter 32 pages
                181–186].
              </li>

              <li>
                I Laughed Like Blazes! - The Life of 'Todger' Jones VC – D.
                Thompson.
              </li>
              <li>
                Supreme Courage – Heroic stories from 150 years of the Victoria
                Cross – General Sir Peter de la Billiere.
              </li>
              <li>
                Brigadier-General R B Bradford VC MC and His Brothers – C.
                Turley-Smith and Major T Welch MC.
              </li>
              <li>The Gateshead Gurkhas – H. Moses. </li>
              <li>The Fighting Bradfords – H. Moses. </li>
              <li>
                Hull Pals: 10th, 11th, 12th and 13th (Service) Battalions of the
                East Yorkshire Regiment.
              </li>
              <li>
                A History of the 92nd Infantry Brigade, 31st Division, 1914-19
                (Pals) - D. Bilton.
              </li>
              <li>
                Hull Pals, 10th, 11th 12th and 13th Battalions East Yorkshire
                Regiment – A History of 92 Infantry Brigade, 31st Division – D.
                Bilton.
              </li>
              <li>General Lord Freyberg VC – Peter Singleton-Gates.</li>
              <li>General Lord Freyberg VC – Peter Singleton-Gates.</li>

              <li>
                Bernard Freyberg, VC : Soldier of Two Nations Paul Freyberg.
              </li>
              <li>
                The Secrets of a Kuttite: An Authentic Story of Kut, Adventures
                in Captivity and Stamboul Intrigue by Captain E. O. Mousley.
              </li>
              <li>
                Britain, India, and the Arabs 1914-1921. Briton Cooper Busch.
              </li>
              <li>
                The Campaign in Mesopotamia. Brigadier-General F. J. Moberly.
              </li>
              <li>
                John Alexander Sinton – VC FRS – Soldier, doctor and scientist –
                A. Sachs.
              </li>
              <li>
                Sinton, John Alexander (1884–1956), soldier and malariologist -
                James S. Porterfield.
              </li>
              <li>
                The Dogra Regiment, a saga of gallantry and valour: a historical
                record, 1858-1981 – R D Palsokar.
              </li>
              <li>
                History of the 1st Battalion 8th Punjab Regiment - N. M
                Geoghegan, and M. H. A Campbell.
              </li>
              <li>
                Unfaded Glory: The 8th Punjab Regiment 1798-1956 – R. N Ahmad
                and R. Ahmed.
              </li>
              <li> History of the Baloch Regiment 1820-1939 – R. Ahmed. </li>

              <li>
                A chaplain's war - The story of Noel Mellish VC MC - Hugh
                Montell ED.
              </li>
              <li>The Jutland Scandal – Reginald Bacon.</li>
              <li>The Battle of Jutland, 1916 - George Bonney.</li>
              <li>
                The Battle of Jutland and the Allied Triumph in the First World
                War – D A Butler.
              </li>
              <li>Jutland: An Analysis of the Fighting – John Campbell.</li>
              <li>
                The Rules of the Game: Jutland and British Naval Command –
                Andrew Gordon.
              </li>
              <li>
                Dreadnought, A history of the Modern Battleship – Richard Hough.
              </li>
              <li>
                "Our Bloody Ships" or "Our Bloody System"? - Jutland and the
                Loss of the Battle Cruisers, 1916." – N A Lambert.
              </li>
              <li>Admirals – N. A. Lambert.</li>
              <li>The Submarine Service, 1900–1918 – N. A Lambert.</li>

              <li>
                Jutland, an Eye-Witness Account of a Great Battle – Stuart Legg.
              </li>
              <li>Jutland 1916, Clash of the Dreadnoughts – Charles London.</li>
              <li>
                Volume II: The War Years to the eve of Jutland, 1914 – 1916 – A
                J Marder.
              </li>
              <li>
                From the Dreadnought to Scapa Flow & Volume III – A J Marder.
              </li>
              <li>
                Jutland and after, May 1916 - December 1916, From the
                Dreadnought to Scapa Flow – A J Marder.
              </li>
              <li>
                Castles of Steel: Britain, Germany, and the Winning of the Great
                War at Sea – R. K. Massie.
              </li>
              <li>Jutland 1916: Death in the Grey Wastes – Nigel Steel.</li>
              <li>
                Jutland: The German Perspective — A New View of the Great Battle
                – V E Tarrant.
              </li>
              <li>Jutland to Junkyard – S C George.</li>
              <li>
                The South Africans with General Smuts in German East Africa,
                1916 - J A Collyer.
              </li>

              <li>
                History of the Great War - Military Operations East Africa - C
                Hordern.
              </li>
              <li>The Empire at War – C. Lucas.</li>
              <li>Trench warfare 1914-1918 – Tony Ashworth.</li>
              <li>
                The 1917 Spring Offensives: Arras, Vimy, Le Chemin des Dames -
                Yves Buffetaut.
              </li>
              <li>
                Military Operations in France and Belgium 1917 – Cyril Falls.
              </li>
              <li>First World War – Gilbert Martin.</li>
              <li>The Western Front – Richard Holmes.</li>
              <li>
                Storm of Steel (translated by Michael Hofman) – Ernst Junger.
              </li>
              <li>The Real War, 1914-1918 – Bail Liddell-Hart.</li>
              <li>My War Memoirs - Erich Ludendorff.</li>

              <li>
                Cheerful Sacrifice: The Battle of Arras 1917 – Jonathan
                Nicholls.
              </li>
              <li>
                Canadian Expeditionary Force 1914-1919 – Col. C D Nicholson.
              </li>
              <li>The Hindenburg Line – Peter Oldham.</li>
              <li>
                Forgotten Victory: The First World War - Myths and Realities &
                Douglas Haig: War Diaries and Letters 1914-1918 Gary Sheffield &
                J. Bourne.
              </li>
              <li>A Short History of World War I – J L Stokesbury.</li>
              <li>Albert Ball, VC - Gillian Elias.</li>
              <li>
                "Legs-Eleven": Being the Story of the 11th Battalion (A.I.F.) in
                the Great War of 1914–1918 – W. Belford.
              </li>
              <li>
                Fremantle to France: 11th Battalion A.I.F. 1914–1919 (2nd ed.)
                I. Gill.
              </li>
              <li>
                Cambrai 1917: The Myth of the First Great Tank Battle. London –
                B. Hammond.
              </li>
              <li>
                Men, Ideas and Tanks: British Military Thought and Armoured
                Forces, 1903–1939 – J. P Harris.
              </li>

              <li>The First World War – H. Strachan.</li>
              <li>The First World War, Volume I: To Arms – H. Strachan.</li>
              <li>
                {" "}
                Military Operations France and Belgium, 1917: 7 June – 10
                November: Messines and Third Ypres (Passchendaele). History of
                the Great War Based on Official Documents by Direction of the
                Historical Section of the Committee of Imperial Defence -
                Imperial War Museum and Battery Press J. E Edmonds ED.
              </li>
              <li>
                {" "}
                Military Operations France and Belgium 1917: The Battle of
                Cambrai. History of the Great War Based on Official Documents by
                Direction of the Historical Section of the Committee of Imperial
                Defence. III - IWM & Battery Press - W. Miles ED.
              </li>
              <li>
                Landrecies to Cambrai: Case Studies of German Offensive and
                Defensive Operations on the Western Front 1914–17 – D. Rogers
                ED.
              </li>
              <li>
                Western Front 1914–18. History of the Royal Regiment of
                Artillery – M. Farndale.
              </li>
              <li>
                The 25th Division in France and Flanders – M. Kincaid-Smith.
              </li>
              <li>Passchendaele: The Untold Story – R. Prior & T. Wilson.</li>

              <li>The Somme – R. Prior and T. Wilson.</li>
              <li>The German Army at Cambrai – J. Sheldon.</li>
              <li>The German Army at Passchendaele – J. Sheldon.</li>
              <li>In Flanders Fields: Passchendaele 1917 – L. Wolff ed.</li>
              <li>
                Victoria Cross: Australia's Finest and the Battles they Fought –
                A. Staunton.
              </li>
              <li>Private John Carroll VC – A. Staunton.</li>
              <li>
                A History of Calday Grange Grammar School, West Kirby, 1636-1976
                - M. J Protheroe.
              </li>
              <li>
                22 Battalion – the Official History of New Zealand in the Second
                World War 1939-45 – J. Henderson.
              </li>
              <li>
                The Complete N.Z. Distinguished Conduct Medal: An account of the
                New Zealand recipients of the Distinguished Conduct Medal – A.
                Polaschek.
              </li>
              <li>Flying Fury - Five Years In the RFC – James McCudden.</li>

              <li>Wars of the 20th Century – R. Hunt.</li>
              <li>The Royal Flying Corps in World War I – R. Barker.</li>
              <li>
                "Our Mickey":The Story of Private James O’Rourke, VC.MM (CEF),
                1879-1957 – M. K. Dooley.
              </li>
              <li>
                Canada's V.C.'s – G C Machum.Canadians and the Victoria Cross –
                D A Melville.
              </li>
              <li>
                The Royal Inniskilling Fusiliers in the World War – F. Fox.
              </li>
              <li>
                Beyond Praise. The Durham Light Infantrymen who were awarded the
                Victoria Cross – S. D Shannon.
              </li>
              <li>
                Pusher Aces of World War 1 - Jon Guttman and Harry Dempsey.
              </li>
              <li>Victoria Cross Heroes – Michael Ashcroft.</li>
              <li>Heroes of the Skies – M. Ashcroft.</li>

              <li>Some Desperate Glory – E. C. Vaughan.</li>
              <li>"Passchendaele" – P. Warner.</li>
              <li>
                "Massacre at Passchendaele — The New Zealand Story" – G. Harper.
              </li>
              <li>
                A Storm in Flanders- The Ypres Salient, 1914-1918 – W. Groom.
              </li>
              <li>
                First World War Service Record – Frederick Birks VC – the
                Australian National Archives.
              </li>
              <li>World War I – J. Ellis and M. Cox.</li>
              <li>
                The Australian Imperial Force in France 1917 – Official History
                of Australia in the War 1914-18 C. Bean.
              </li>
              <li>McGee, Lewis (1888-1917) – Q. Beresford.</li>
              <li>The Story of Tommy Holmes, V.C. 1898-1950 – M. M. Croft.</li>
              <li>
                The Grey and Simcoe Foresters, A Soldier's Concise Guide to
                Regimental History – J. R. Fisher & E. J. Fuller.
              </li>

              <li>Hoodoo Kinross, VC, The Pride of Lougheed – E. Dixon.</li>
              <li>
                For Most Conspicuous Bravery A Bio of Major-General George
                Pearkes, V.C., through Two World Wars – R H Roy.
              </li>
              <li>
                U-Boat War in World War I & WW1 U Boats: UC-71 – G. Helgason.
              </li>
              <li>
                Salute to a Hero – containing the illustrated account of Gordon
                Campbell, "the most famous Q-ship officer" – C. Winchester [ED].
              </li>
              <li>Sea killers in disguise - T. Bridgeland.</li>
              <li>
                Sea Heroes, Thomas Crisp VC, DSC, Hero of the Q Ships – Suffolk
                Records Office.
              </li>
              <li>McNamara VC - A Hero's Dilemma - C. Coulthard-Clark.</li>
              <li>
                The Australian Flying Corps: In the Western and Eastern Theatres
                of War, 1914-1918 - F. M. Cutlack.
              </li>
              <li>Somerset's Forgotten Heroes – R. Evans.</li>
              <li>Canada's Fighting Airmen - Lieutenant Colonel Drew.</li>

              <li>
                34507 Pte Henry Tandey, appendix IV - The History of the Duke of
                Wellingtons – J.M. Brereton & A.C.S. Savory.
              </li>
              <li>
                The soldier who could have stopped a world war with one shot -
                M. Morpurgo – The Times 3/10/2015.
              </li>
              <li>
                One Soldier and Hitler, 1918: The Story of Henry Tandey VC DCM
                MM – D. Johnson.
              </li>
              <li>Herbert Columbine VC - Carole McEntee-Taylor.</li>
              <li>Cross Border Warriors – F. Gaffen.</li>
              <li>The Canadian Army at War – M. Chappell.</li>
              <li>Travis – Man in No Mans Land – J. Gasson.</li>
              <li>
                King of the Air Fighters - The biography of Major Mick Mannock,
                V.C., D.S.O., M.C. - Ira Jones.
              </li>
              <li>
                'Mick' the story of Major Edward Mannock, VC, DSO, MC Royal
                Flying Corps and Royal Air Force – J M Dudgeon.
              </li>
              <li>
                Mannock VC – The Ace with One Eye – F. Oughton & V. Smyth.
              </li>

              <li>
                {" "}
                Mannock: The Life and Death of Major Edward Mannock VC, DSO, MC,
                RAF – N. Franks.
              </li>
              <li>
                Wings of Freedom:Twelve Battle of Britain Pilots – N. Franks.
              </li>
              <li>
                In the Footsteps of the Red Baron – M. O Connor & N. Franks.
              </li>
              <li>Cheshire, V.C. - R. Bradon.</li>
              <li>British Gallentry Awards; PE Abbott & JMA Tamplin.</li>
              <li>Victoria Cross Reference; created by Mike Chapman. </li>
              <li>The Evolution of the Victoria Cross, M.J. Crook.</li>
              <li>Eugene Esmonde, VC, DSO - Chaz Bowyer.</li>
              <li>The Air VC’s – Chaz Bowyer.</li>
              <li>Albert Ball, VC - Chaz Bowyer.</li>

              <li>
                Eardley VC, MM, KSLI - Roy H. Eardley, Andrea Wendy Eardley.
              </li>
              <li>Kenneally, VC - John Kenneally.</li>
              <li>
                Magennis VC: the Story of Northern Ireland's Only Winner -
                George Fleming.
              </li>
              <li>The Dam Busters - Paul Brickhill.</li>
              <li>The Augsberg Raid - Jack Currie.</li>
              <li>Dieppe - The Shame and the Glory - Terence Robertson.</li>
              <li>Cyril Joe Barton VC - William Lowther.</li>
              <li>Anders Lassen VC, MC, of the SAS - Mike Langley.</li>
              <li>
                One man's desert : the story of Captain Pip Gardner, VC, MC -
                Rex Woods.
              </li>
              <li>
                Mark of the Lion - The Story Of Capt. Charles Upham - Kenneth
                Sandford.
              </li>

              <li>
                The Silent Men, Syria to Kokoda and on to Gona. - Peter Dornan.
              </li>
              <li>The Last Eleven? - Mark Adkin.</li>
              <li>Andrew Moynihan, VC - Henry L. Kirby.</li>
              <li>Private William Young, VC - Henry L. Kirby.</li>
              <li>Monuments To Courage, David Harvey.</li>
              <li>The Sapper VCs - Gerald Napier.</li>
              <li>
                The VCs of Wales and the Welsh Regiments - W. Alister Williams.
              </li>
              <li>
                Against the Odds - the life of Group Captain Lionel Rees, VC -
                W. Alister Williams.
              </li>
              <li>
                Rowlands, VC - the life and career of General Sir Hugh Rowlands,
                VC, KCB, W. Alister Williams.
              </li>
              <li>
                Heart of a Dragon, the VCs of Wales and the Welsh Regiments,
                1914–82 - W. Alister Williams.
              </li>

              <li>The Four Blackburn VC's - HL Kirby and RR Walsh.</li>
              <li>
                Drummer Spencer John Bent, VC - Henry L. Kirby, R.R. Walsh.
              </li>
              <li>
                Elegant Extracts - The Royal Fusiliers Recipients of the VC -
                J.P. Kelleher.
              </li>
              <li>The Battles of the Somme – Philip Gibbs.</li>
              <li>Victoria Crosses of the Anglo-Boer War - Ian Uys.</li>
              <li>
                For valour: the history of Southern Africa's Victoria Cross
                heroes – I. Uys.
              </li>
              <li>In Search of Claud – S. Snelling.</li>
              <li>The Airship VC - Raymond Laurence Rimell.</li>
              <li>
                Warneford, V.C. - The First Naval Airmen to Be Awarded the VC -
                Mary Gibson.
              </li>
              <li>Dam Buster: the Life of Guy Gibson, VC - Susan Ottaway.</li>

              <li>VCs of the First World War - 1914. Gerald Gliddon.</li>
              <li>
                VC's of the First World War - Arras & Messines 1917 – G.
                Gliddon.
              </li>
              <li>VCs of the First World War: Cambrai 1917 – G. Gliddon.</li>
              <li>
                VCs of the First World War - Spring Offensive 1918 - Gerald
                Gliddon.
              </li>
              <li>
                VCs of the First World War - The Final Days 1918 - Gerald
                Gliddon.
              </li>
              <li>VCs of the First World War - The Somme. Gerald Gliddon.</li>
              <li>
                VCs of the First World War - The Western Front 1915 - Peter F.
                Batchelor & Christopher Matson.
              </li>
              <li>VCs of the First World War - Air VCs - P G Cooksley.</li>
              <li>
                VCs of the First World War - Gallipoli - Stephen Snelling.
              </li>
              <li>
                VCs of the First World War - The Naval VCs - Stephen Snelling.
              </li>
              <li>
                VCs of the First World War - Passchendaele 1917 - Stephen
                Snelling.
              </li>

              <li>
                Enemy Coast Ahead - Guy Gibson. - (Enemy Coast Ahead - Guy
                Gibson, 1946).
              </li>
              <li>
                Wilfrith Elstob, VC, DSO, MC: Manchester Regiment - "Here We
                Fight, Here We Die! " - Robert A. Bonner.
              </li>
              <li>
                Issy Smith VC, The Manchester Regiment – A soldier of the
                Jullundur Brigade – Robert A. Bonner.
              </li>
              <li>Edward St John Daniel, VC - Michael Daniels.</li>
              <li>John Williams VC: A Biography - W.G. Lloyd.</li>
              <li>Johnnie Gough, VC - Ian F.W. Beckett.</li>
              <li>The Victorians At War, Ian F. W. Beckett.</li>
              <li>
                Congreve, Sir Walter Norris – [1862-1927] – Ian F. W. Beckett.
              </li>
              <li>
                Jacka VC, Australia's finest fighting soldier - Ian Grant.
              </li>
              <li>
                {" "}
                D-day Victoria Cross: Story of Sergeant Major Stanley Hollis, VC
                - Philip Wilkinson.
              </li>

              <li>
                'Hellfire Jack!' VC: General Sir William Olpherts 1822-1902 -
                Peter Collister.
              </li>
              <li>
                Buller: A Scapegoat? A life of General Sir Redvers Buller, V.C.
                - Geoffrey Powell.
              </li>
              <li>
                Lord Roberts of Kandahar, V.C. The life story of a great soldier
                - W. Jerrold.
              </li>
              <li>
                Bobs - Kipling's General - The life of Field Marshall Earl
                Roberts of Kandahar, V.C. - W. H. Hannah.
              </li>
              <li>My Mystery Ships – G. Campbell G VC DSO & 2 Bars, 1928.</li>
              <li>The Times History of the War in 20 volumes and an index.</li>
              <li>Gallantry Medals & Awards of the World – John D Clarke.</li>
              <li>
                The War Correspondants – The Crimean War – Lambert and Badsey.
              </li>
              <li>Martin Leake : Double VC – Ann Clayton.</li>
              <li>Chavasse : Double VC - Ann Clayton.</li>

              <li>
                {" "}
                The Crimean War - The Truth Behind The Myth - Clive Ponting
              </li>
              <li>
                1854-56 Crimea – The War with Russia from Contemporary
                Photographs – Lawrence James.
              </li>
              <li>The Crimean War – Paul Kerr.</li>
              <li>Essential Histories The Crimean War – John Sweetman.</li>
              <li>
                Symbol of Courage - A complete history of the Victoria Cross -
                Max Arthur.
              </li>
              <li>Forgotten Voices of the Great War – M. Arthur.</li>
              <li>Guards VC: Blitzkrieg 1940. - Dilip Sarkar.</li>
              <li>
                Cheshire : The biography of Leonard Cheshire, VC, OM - Richard
                Morris.
              </li>
              <li>VC’s of the Air – John Frayn Turner.</li>
              <li>Tribe of the War God. - R. Taylor.</li>

              <li>The Wiltshire Regiment – 1914 – 1959 – M. McIntyre.</li>
              <li>'Above the Trenches' - Shores, Franks & Guest.</li>
              <li>
                Victoria Cross WW I: WWI Airmen and Their Aircraf t - A. Revell.
              </li>
              <li>
                Lost Wings of WW1: Downed Airmen on the Western Front 1914-1918
                – M. W. Bowman.
              </li>
              <li>Aces Falling: War Above the Trenches, 1918 – P. Hart.</li>
              <li>Merry Hell! A Dane with the Canadians – T. Dinesen.</li>
              <li>
                The Road to Victory 1918, VCs of the First World War – G.
                Gliddon.
              </li>
              <li>For Valour: Australians and the Victoria Cross – R. Reid.</li>
              <li>The Old Sixteenth- C. Longmore. </li>
              <li>They Dared Mightily - L. Wigmore (ed).</li>

              <li>The Battle of Mont St Quentin–Peronne 1918 – M. Bornford.</li>
              <li>World War I: An Outline History – H. Baldwin.</li>
              <li>The 63rd [Royal Naval] Division in 1914-1918 – C. Baker.</li>
              <li>Man of Valour – J R Colville.</li>
              <li>
                Biographical Dictionary of British Generals of the Second World
                War – N. Smart.
              </li>
              <li>
                Soldier, Poet, Rebel: The Extraordinary Life of Charles Hudson
                VC – M. Hudson.
              </li>
              <li>
                Under the Devil's Eye: Britain's Forgotten Army at Salonika
                1915–1918 – A. Wakefield & S. Moody.
              </li>
              <li>
                Valiant Hearts, Atlantic Canada and the Victoria Cross. - J.
                Boileau.
              </li>
              <li>
                Cowan's war: the story of British naval operations in the
                Baltic, 1918–1920 – G. Bennett.
              </li>
              <li>Battle of the Baltic – R. Jackson.</li>

              <li>
                Churchill's Crusade: The British Invasion of Russia 1918–1920 –
                C. Kinvig.
              </li>
              <li>Churchill and the Archangel Fiasco – M. Kettle.</li>
              <li>
                Forgotton Valour – The Story of A. Sullivan – P. Quinlivian.
              </li>
              <li>
                Anzacs in Arkhangel. The untold story of Australia and the
                invasion of Russia 1918–19 – M. Challinger.
              </li>
              <li>
                Victoria's Cross: The Story of Sgt Samuel George Pearse – M.
                Irwin.
              </li>
              <li>
                George Stuart Henderson - The Story of a Scottish Soldier –
                R.King-Clark.
              </li>
              <li>Enemies of Promise – C. Connolly.</li>
              <li>Bravest of the Brave - J. Glansfield.</li>
              <li>
                Nicolson VC - the FullAuthorised Biography of James B Nicolson,
                the only Pilot of Fighter Command in World War II to be awarded
                the Victoria Cross – P D Mason.
              </li>
              <li>
                Nicolson's Story: Story of James Brindley Nicolson, VC, DFC -
                One of the "Few" Killed in Action – P. Wilkinson.
              </li>

              <li>
                No Passing Glory: The Full and Authentic Biography of Group
                Captain Cheshire, V.C., D.S.O, D.F.C. - A. Boyle.
              </li>
              <li>Bomber Command – M. Hastings.</li>
              <li>
                The Ship-Busters: The Story of the R.A.F. Torpedo-Bombers – R.
                Barker.
              </li>
              <li>Beaufort Special – B. Robertson.</li>
              <li>Jack Hinton V.C.: A Man Amongst Men – G. McDonald.</li>
              <li>
                20 Battalion and Armoured Regiment – D J C Pringle and W A Glue.
              </li>
              <li>
                Hero of the Upholder: The Story of Lieutenant Commander M.D.
                Wanklyn VC, DSO** - J. Allaway.
              </li>
              <li>
                Sea Wolves: The Extraordinary Story of Britain's World War II
                Submarines. - T. Clayton.
              </li>
              <li>Captains Of War: They Fought Beneath the Sea – E. Gray.</li>
              <li>Submarine Upholder – S. Hart.</li>

              <li>Malta Convoys 1940-42: The Struggle at Sea – D. Thomas.</li>
              <li>
                Periscope Patrol: The Saga of the Malta Force Submarines. - J.
                F. Turner.
              </li>
              <li>
                The History of the British U Class Submarine – D. Walters.
              </li>
              <li>Roden Cutler VC – C. McCullough.</li>
              <li>The Courage and the Will – C. McCullough.</li>
              <li>
                Singapore Burning: Heroism and Surrender in World War II – C.
                Smith.
              </li>
              <li>
                The Bridge at Parit Sulong – An Investigation of Mass Murder –
                L. Silver.
              </li>
              <li>Massacre at Parit Sulong – G. Mant.</li>
              <li>Army Commandos 1940-45 – M. Chappell.</li>
              <li>St Nazaire 1942: the great commando raid – K. Ford.</li>

              <li>British Commandos 1940-46 – T. R. Moreman.</li>
              <li>
                To Serve Canada: A History of the Royal Military College of
                Canada – R. A. Preston.
              </li>
              <li>To Kokoda and Beyond – V. Austin.</li>
              <li>Those Ragged Bloody Heroes – P. Brune.</li>
              <li>A Bastard of a Place – P. Brune.</li>
              <li>200 Shots – P. Brune & N. McDonald.</li>
              <li>Kokoda – P. Ham.</li>
              <li>
                The Australian Army in World War II – M. Johnston & C. Chagas.
              </li>
              <li>South West Pacific 1941–45 – E. Keough.</li>
              <li>The Spirit of Kokoda: Then and Now – P. Lindsay.</li>

              <li>73 North - The Battle of Barents Sea 1942 – D. Pope.</li>
              <li>Beneath The Waves – A.S Evans.</li>
              <li>British Submarines at War 1939-45 - A. Mars.</li>
              <li>Allied Submarine Attacks of World War Two - .J. Rohwer.</li>
              <li>
                Unfaded Glory: The 8th Punjab Regiment 1798-1956 – Nadeem &
                Rafiuddin.
              </li>
              <li>Bill Newton VC: The Short Life of a RAAF Hero – M. Weate.</li>
              <li>For Valour: The Air Vcs – C. Bowyer. </li>
              <li>
                Wings of Destiny: Wing Commander Charles Learmonth, DFC and Bar
                and the Air War in New Guinea – C. Page.
              </li>
              <li>The Royal Australian Air Force: A History – A. Stephens.</li>
              <li>
                High Fliers: Leaders of the Royal Australian Air Force – A.
                Stephens.
              </li>

              <li>The Brotherhood of Airmen – D. Wilson.</li>
              <li>
                Tobruk and El Alamein. Australia in the War of 1939-1945 – B.
                Maughan.
              </li>
              <li>Tarakan. An Australian Tragedy – P. Stanley.</li>
              <li>Venturer Courageous – J. Saunders and L. Lucas.</li>
              <li>Guy Gibson VC The Glorious Dambuster – S. Ottaway.</li>
              <li>Guy Gibson – R. Morris.</li>
              <li>Heroes of the RAF: Guy Gibson VC.</li>
              <li>
                The Chindit War: Stilwell, Wingate, and the Campaign in Burma:
                1944 – S. Bidwell.
              </li>
              <li>Chindits: Long Range Penetration – M. Calvert.</li>
              <li>
                Burma Victory: Imphal and Kohima March 1944 to May 1945 – D.
                Rooney.
              </li>

              <li>The Road Past Mandalay - J. Masters.</li>
              <li>Road of Bones: The Siege of Kohima 1944 – F. Keane.</li>
              <li>Kohima 1944: The Battle that saved India – R. Lyman.</li>
              <li>
                The Tenth Baluch Regiment in the Second World War – W S
                Thatcher.
              </li>
              <li>Raider: The Halifax and its Flyers – G. Jones.</li>
              <li>British VCs of World War 2: A study in Heroism J. Laffin.</li>
              <li>
                Bomber Squadrons of the RAF and their Aircraft P.J.R Moyes.
              </li>
              <li>
                The Royal Canadian Air Force at War, 1939-1945 – L. Milberry.
              </li>
              <li>
                The Moose Squadron: 1941-1945, The War Years of 419 Squadron.
                Cold Lake, Alberta: 419 Tactical Fighter (Training) Squadron.
              </li>
              <li>"Moosemen": 419 Squadron History – 1945.</li>

              <li>
                Mynarski's Lanc: The Story of Two Famous Canadian Lancaster
                Bombers K726 & FM213 – B. Page.
              </li>
              <li>
                Heroic Endeavour: One Attack, a Victoria Cross and 206 Brave Men
                – S. Feast.
              </li>
              <li>Normandy: The Search For Sidney – T. J. Bates.</li>
              <li>Cabobula (Ultimate Sacrifice) - Tevita Nawadra.</li>
              <li>Arnhem 1944 The Airborne Battle – M. Middlebrook.</li>
              <li>The Arnhem Roll of Honour - J H Grayburn.</li>
              <li>A Bridge Too Far – C. Ryan.</li>
              <li>
                A Tribute to the Life of Jack Grayburn - Roger Cook, Amersham
                and Chiltern RFC.
              </li>
              <li>Dakota Heroes – P. Rodgers.</li>
              <li>Dorset's Forgotten Heroes – D. Beaton.</li>

              <li>It Never Snows In September – R. Kershaw.</li>
              <li>Dictionary of South African Biography.</li>
              <li>A Bank in Battledress Barclays Bank.</li>
              <li>The Official Natal Mounted Rifles History – E. Goetzsche.</li>
              <li>Bomber Command History.</li>
              <li>Bennett and the Pathfinders – J. Maynard.</li>
              <li>
                Monty's Greatest Victory: The Drive for the Baltic April – May
                1945 – C. Whiting.
              </li>
              <li>
                "Europe's Last VC – Guardsman Edward Charlton" – in After the
                Battle magazine No. 49, 1985. Contains additional memoirs of the
                surviving Irish Guards officers and men and German officers
                which correct the original citation.
              </li>
              <li>'Commando Medic' a Google eBook by S J Snelling.</li>
              <li>Bhanbhagta Gurung VC – A. Staunton.</li>
              <li>Reginald Roy Rattey VC – Our Humble Hero – C. Barbary.</li>
              <li>The South West Pacific – E. Keogh.</li>
              <li>
                The Blue Diamonds: The History of the 7th Brigade, 1915–2008 –
                D. Belham & P. Denham.
              </li>
              <li>
                Rattey, Reginald Roy [1917-1986] – The Australian Dictionary of
                Biography – vol 18 – A. Staunton.
              </li>
              <li>The New Guinea Offensives – D. Dexter.</li>
              <li>
                Nothing Much to Lose – The Story of the 2nd Battalion Royal
                Marines and 43 Commando Royal Marines – M. McConville.
              </li>
              <li>
                Anders Lassen, VC – The Story of a Courageous Dane - Suzanne
                Lassen.
              </li>
              <li>Churchill's secret warriors – D. Lewis.</li>
              <li>
                Desert Raiders: Axis and Allied Special Forces 1940-43 – A.
                Molinari.
              </li>

              <li>The Special Boat Squadron in WW2 – G. Mortimer.</li>
              <li>
                Clandestine Sea Operations to Brittany: 1940 – 1944 – R. Brooks
                and M. Foot.
              </li>
              <li>
                Anders Lassens Krig 9 April 1940 – 9 April 1945 – T. Harder.
              </li>
              <li>Frogman V.C – Ian Fraser.</li>
              <li>
                The Mammoth Book of Eye-Witness History edited by J. E. Lewis.
              </li>
              <li>
                Beyond the Legend: Bill Speakman VC – D. Hunt & J. Mulholland.
              </li>
              <li>Australian Military Operations in Vietnam – A. Palazzo.</li>
              <li>Dasher Wheatley and Australia in Vietnam – I. Walters.</li>
              <li>'Blaming Buckingham Palace' – A. Staunton.</li>
              <li>
                H. Jones VC: The Life and Death of an Unusual Hero – J. Wilsey.{" "}
              </li>
              <li>
                Falklands Hero – Ian Mackay – The Last VC of the 20th Century –
                J. Cooksey.
              </li>
              <li>
                2 Para's Battle for Darwin Hill and Goose Green – D. J. Kenney.
              </li>
              <li>20th Century Battlefields – D and P Snow.</li>
              <li>
                Not mentioned in despatches: the history and mythology of the
                Battle of Goose Green – S. Fitz-Gibbon.
              </li>
              <li>Barefoot Soldier – J. Beharry and N. Cook.</li>
              <li>
                Willie Apiata – Reluctant Hero – P. Little and J. Lockyer.
              </li>
            </ul>
          </article>

          <article>
            <Image fluid={fluid} alt="book" classname="img"></Image>
          </article>
        </section>
      </Layout>
    </Wrapper>
  )
}

export default References

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);

  .btn-section {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .btn {
    width: 25%;
    margin: 1rem 0;

    text-transform: uppercase;
    background: var(--clr-primary-5);
    color: var(--clr-primary-9);
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 700;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
  }
  .btn:hover {
    color: var(--clr-primary-1);
    background: var(--clr-primary-8);
  }

  .btn a {
    color: white;
  }

  .single-article {
    width: 90vw;
    max-width: 1170px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 2rem auto;
  }

  .img {
    height: 10rem;
    border-radius: var(--radius);
    transition: var(--transition);
  }

  p {
    margin: 0;
    color: black;
  }

  @media screen and (min-width: 768px) {
    .single-article {
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-gap: 2rem;
      column-gap: 2rem;
    }
  }

  nav {
    background: var(--clr-primary-55);
  }
`

export const query = graphql`
  {
    file(relativePath: { eq: "book.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
