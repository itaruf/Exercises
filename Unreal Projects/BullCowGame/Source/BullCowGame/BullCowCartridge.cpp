// Fill out your copyright notice in the Description page of Project Settings.
#include "BullCowCartridge.h"
#include "Math/UnrealMathUtility.h"

void UBullCowCartridge::BeginPlay() // When the game starts
{
    Super::BeginPlay();

    TArray<FString> WordList =
        {TEXT("regulations"),
         TEXT("switzerland"),
         TEXT("personality"),
         TEXT("documentary"),
         TEXT("copyrighted"),
         TEXT("backgrounds"),
         TEXT("republicans"),
         TEXT("atmospheric"),
         TEXT("demographic"),
         TEXT("background"),
         TEXT("compatible"),
         TEXT("regulation"),
         TEXT("previously"),
         TEXT("importance"),
         TEXT("authorized"),
         TEXT("favourites"),
         TEXT("purchasing"),
         TEXT("bankruptcy"),
         TEXT("republican"),
         TEXT("complaints"),
         TEXT("customized"),
         TEXT("complexity"),
         TEXT("algorithms"),
         TEXT("boundaries"),
         TEXT("copyright"),
         TEXT("education"),
         TEXT("something"),
         TEXT("companies"),
         TEXT("computers"),
         TEXT("marketing"),
         TEXT("published"),
         TEXT("countries"),
         TEXT("documents"),
         TEXT("operating"),
         TEXT("publisher"),
         TEXT("relations"),
         TEXT("universal"),
         TEXT("computing"),
         TEXT("favorites"),
         TEXT("reduction"),
         TEXT("secondary"),
         TEXT("wonderful"),
         TEXT("singapore"),
         TEXT("permalink"),
         TEXT("signature"),
         TEXT("certainly"),
         TEXT("searching"),
         TEXT("equations"),
         TEXT("brunswick"),
         TEXT("streaming"),
         TEXT("syndicate"),
         TEXT("microwave"),
         TEXT("reactions"),
         TEXT("particles"),
         TEXT("exploring"),
         TEXT("numerical"),
         TEXT("childrens"),
         TEXT("porcelain"),
         TEXT("pichunter"),
         TEXT("neighbors"),
         TEXT("champions"),
         TEXT("comparing"),
         TEXT("keyboards"),
         TEXT("inspector"),
         TEXT("educators"),
         TEXT("breakdown"),
         TEXT("furnished"),
         TEXT("boulevard"),
         TEXT("compliant"),
         TEXT("livestock"),
         TEXT("breathing"),
         TEXT("competing"),
         TEXT("magnitude"),
         TEXT("spreading"),
         TEXT("provinces"),
         TEXT("duplicate"),
         TEXT("organised"),
         TEXT("replacing"),
         TEXT("benchmark"),
         TEXT("daughters"),
         TEXT("hydraulic"),
         TEXT("sexuality"),
         TEXT("intervals"),
         TEXT("exclusion"),
         TEXT("frontpage"),
         TEXT("creations"),
         TEXT("nightmare"),
         TEXT("terminals"),
         TEXT("longitude"),
         TEXT("products"),
         TEXT("software"),
         TEXT("security"),
         TEXT("computer"),
         TEXT("pictures"),
         TEXT("personal"),
         TEXT("children"),
         TEXT("previous"),
         TEXT("customer"),
         TEXT("category"),
         TEXT("industry"),
         TEXT("articles"),
         TEXT("question"),
         TEXT("problems"),
         TEXT("includes"),
         TEXT("provides"),
         TEXT("document"),
         TEXT("projects"),
         TEXT("archives"),
         TEXT("purchase"),
         TEXT("discount"),
         TEXT("regional"),
         TEXT("behavior"),
         TEXT("festival"),
         TEXT("scotland"),
         TEXT("birthday"),
         TEXT("profiles"),
         TEXT("breaking"),
         TEXT("combined"),
         TEXT("forecast"),
         TEXT("creation"),
         TEXT("majority"),
         TEXT("daughter"),
         TEXT("improved"),
         TEXT("discover"),
         TEXT("tracking"),
         TEXT("sporting"),
         TEXT("advisory"),
         TEXT("investor"),
         TEXT("speaking"),
         TEXT("guidance"),
         TEXT("upcoming"),
         TEXT("portland"),
         TEXT("relating"),
         TEXT("becoming"),
         TEXT("relation"),
         TEXT("watching"),
         TEXT("sterling"),
         TEXT("journals"),
         TEXT("terminal"),
         TEXT("keyboard"),
         TEXT("suitable"),
         TEXT("province"),
         TEXT("magnetic"),
         TEXT("counties"),
         TEXT("flashing"),
         TEXT("antiques"),
         TEXT("reaction"),
         TEXT("duration"),
         TEXT("thousand"),
         TEXT("hamilton"),
         TEXT("portugal"),
         TEXT("strongly"),
         TEXT("proteins"),
         TEXT("vertical"),
         TEXT("absolute"),
         TEXT("tropical"),
         TEXT("somewhat"),
         TEXT("richmond"),
         TEXT("covering"),
         TEXT("platinum"),
         TEXT("judgment"),
         TEXT("modeling"),
         TEXT("spectrum"),
         TEXT("reducing"),
         TEXT("launched"),
         TEXT("champion"),
         TEXT("syndrome"),
         TEXT("catering"),
         TEXT("dynamics"),
         TEXT("compiled"),
         TEXT("romantic"),
         TEXT("equation"),
         TEXT("chapters"),
         TEXT("boundary"),
         TEXT("acquired"),
         TEXT("bachelor"),
         TEXT("montreal"),
         TEXT("shoulder"),
         TEXT("literacy"),
         TEXT("dialogue"),
         TEXT("sampling"),
         TEXT("township"),
         TEXT("explains"),
         TEXT("archived"),
         TEXT("courtesy"),
         TEXT("counters"),
         TEXT("builders"),
         TEXT("branches"),
         TEXT("holdings"),
         TEXT("browsing"),
         TEXT("interval"),
         TEXT("drawings"),
         TEXT("scenario"),
         TEXT("produces"),
         TEXT("reaching"),
         TEXT("surgical"),
         TEXT("studying"),
         TEXT("upgrades"),
         TEXT("outreach"),
         TEXT("precious"),
         TEXT("removing"),
         TEXT("isolated"),
         TEXT("velocity"),
         TEXT("stanford"),
         TEXT("gamespot"),
         TEXT("integral"),
         TEXT("imported"),
         TEXT("focusing"),
         TEXT("equality"),
         TEXT("updating"),
         TEXT("readings"),
         TEXT("confused"),
         TEXT("compiler"),
         TEXT("slovenia"),
         TEXT("monetary"),
         TEXT("floating"),
         TEXT("plymouth"),
         TEXT("actively"),
         TEXT("particle"),
         TEXT("minerals"),
         TEXT("informal"),
         TEXT("captured"),
         TEXT("olympics"),
         TEXT("plumbing"),
         TEXT("tribunal"),
         TEXT("charming"),
         TEXT("caroline"),
         TEXT("polished"),
         TEXT("switched"),
         TEXT("temporal"),
         TEXT("istanbul"),
         TEXT("throwing"),
         TEXT("maldives"),
         TEXT("budapest"),
         TEXT("lightbox"),
         TEXT("product"),
         TEXT("privacy"),
         TEXT("company"),
         TEXT("details"),
         TEXT("subject"),
         TEXT("special"),
         TEXT("project"),
         TEXT("version"),
         TEXT("section"),
         TEXT("network"),
         TEXT("history"),
         TEXT("profile"),
         TEXT("another"),
         TEXT("quality"),
         TEXT("country"),
         TEXT("private"),
         TEXT("compare"),
         TEXT("include"),
         TEXT("article"),
         TEXT("provide"),
         TEXT("english"),
         TEXT("medical"),
         TEXT("working"),
         TEXT("payment"),
         TEXT("problem"),
         TEXT("changes"),
         TEXT("picture"),
         TEXT("journal"),
         TEXT("central"),
         TEXT("archive"),
         TEXT("society"),
         TEXT("friends"),
         TEXT("display"),
         TEXT("hosting"),
         TEXT("minutes"),
         TEXT("reading"),
         TEXT("germany"),
         TEXT("various"),
         TEXT("methods"),
         TEXT("chapter"),
         TEXT("michael"),
         TEXT("florida"),
         TEXT("holiday"),
         TEXT("kingdom"),
         TEXT("storage"),
         TEXT("players"),
         TEXT("certain"),
         TEXT("tuesday"),
         TEXT("lesbian"),
         TEXT("machine"),
         TEXT("foreign"),
         TEXT("outside"),
         TEXT("located"),
         TEXT("numbers"),
         TEXT("ratings"),
         TEXT("rentals"),
         TEXT("improve"),
         TEXT("parents"),
         TEXT("kitchen"),
         TEXT("flowers"),
         TEXT("housing"),
         TEXT("ireland"),
         TEXT("instead"),
         TEXT("leading"),
         TEXT("century"),
         TEXT("default"),
         TEXT("protein"),
         TEXT("authors"),
         TEXT("faculty"),
         TEXT("parties"),
         TEXT("playing"),
         TEXT("virtual"),
         TEXT("surface"),
         TEXT("variety"),
         TEXT("updates"),
         TEXT("desktop"),
         TEXT("showing"),
         TEXT("watches"),
         TEXT("complex"),
         TEXT("monthly"),
         TEXT("musical"),
         TEXT("changed"),
         TEXT("largest"),
         TEXT("justice"),
         TEXT("auction"),
         TEXT("charles"),
         TEXT("fashion"),
         TEXT("trading"),
         TEXT("clients"),
         TEXT("actions"),
         TEXT("markets"),
         TEXT("factors"),
         TEXT("quickly"),
         TEXT("brought"),
         TEXT("himself"),
         TEXT("keyword"),
         TEXT("upgrade"),
         TEXT("hearing"),
         TEXT("therapy"),
         TEXT("towards"),
         TEXT("charges"),
         TEXT("talking"),
         TEXT("sitemap"),
         TEXT("plastic"),
         TEXT("produce"),
         TEXT("counter"),
         TEXT("failure"),
         TEXT("jackson"),
         TEXT("parking"),
         TEXT("objects"),
         TEXT("nuclear"),
         TEXT("tourism"),
         TEXT("graphic"),
         TEXT("credits"),
         TEXT("flights"),
         TEXT("vintage"),
         TEXT("exactly"),
         TEXT("reality"),
         TEXT("figures"),
         TEXT("sharing"),
         TEXT("serving"),
         TEXT("amounts"),
         TEXT("crystal"),
         TEXT("dynamic"),
         TEXT("regions"),
         TEXT("posting"),
         TEXT("deposit"),
         TEXT("seminar"),
         TEXT("specify"),
         TEXT("formats"),
         TEXT("notices"),
         TEXT("toshiba"),
         TEXT("vietnam"),
         TEXT("gardens"),
         TEXT("antique"),
         TEXT("density"),
         TEXT("strange"),
         TEXT("domains"),
         TEXT("capture"),
         TEXT("camping"),
         TEXT("closing"),
         TEXT("monster"),
         TEXT("columns"),
         TEXT("heating"),
         TEXT("dealing"),
         TEXT("livecam"),
         TEXT("voltage"),
         TEXT("loading"),
         TEXT("liberty"),
         TEXT("wyoming"),
         TEXT("convert"),
         TEXT("postage"),
         TEXT("filters"),
         TEXT("douglas"),
         TEXT("victory"),
         TEXT("madison"),
         TEXT("anytime"),
         TEXT("promise"),
         TEXT("cabinet"),
         TEXT("mexican"),
         TEXT("healing"),
         TEXT("senator"),
         TEXT("counsel"),
         TEXT("ukraine"),
         TEXT("cluster"),
         TEXT("vendors"),
         TEXT("couples"),
         TEXT("sublime"),
         TEXT("uniform"),
         TEXT("publish"),
         TEXT("thermal"),
         TEXT("charity"),
         TEXT("hungary"),
         TEXT("penalty"),
         TEXT("builder"),
         TEXT("divorce"),
         TEXT("trained"),
         TEXT("worship"),
         TEXT("patches"),
         TEXT("combine"),
         TEXT("bristol"),
         TEXT("grounds"),
         TEXT("profits"),
         TEXT("florist"),
         TEXT("deutsch"),
         TEXT("funeral"),
         TEXT("charlie"),
         TEXT("francis"),
         TEXT("noticed"),
         TEXT("holders"),
         TEXT("impacts"),
         TEXT("routine"),
         TEXT("wearing"),
         TEXT("mounted"),
         TEXT("podcast"),
         TEXT("younger"),
         TEXT("rapidly"),
         TEXT("outline"),
         TEXT("careful"),
         TEXT("tracked"),
         TEXT("consult"),
         TEXT("greatly"),
         TEXT("turkish"),
         TEXT("pentium"),
         TEXT("pointer"),
         TEXT("permits"),
         TEXT("olympic"),
         TEXT("rainbow"),
         TEXT("britney"),
         TEXT("founder"),
         TEXT("dispute"),
         TEXT("jelsoft"),
         TEXT("pointed"),
         TEXT("causing"),
         TEXT("mistake"),
         TEXT("mineral"),
         TEXT("fortune"),
         TEXT("claimed"),
         TEXT("stadium"),
         TEXT("costume"),
         TEXT("painted"),
         TEXT("ethical"),
         TEXT("neutral"),
         TEXT("heading"),
         TEXT("bearing"),
         TEXT("violent"),
         TEXT("anymore"),
         TEXT("optimal"),
         TEXT("sucking"),
         TEXT("watched"),
         TEXT("routing"),
         TEXT("stanley"),
         TEXT("scoring"),
         TEXT("soldier"),
         TEXT("bowling"),
         TEXT("solving"),
         TEXT("deviant"),
         TEXT("briefly"),
         TEXT("fighter"),
         TEXT("andrews"),
         TEXT("modular"),
         TEXT("porsche"),
         TEXT("hopkins"),
         TEXT("roughly"),
         TEXT("sticker"),
         TEXT("planets"),
         TEXT("boulder"),
         TEXT("coupled"),
         TEXT("thunder"),
         TEXT("caution"),
         TEXT("pirates"),
         TEXT("weights"),
         TEXT("lasting"),
         TEXT("webcams"),
         TEXT("surname"),
         TEXT("lawsuit"),
         TEXT("courage"),
         TEXT("coleman"),
         TEXT("knights"),
         TEXT("pontiac"),
         TEXT("lighter"),
         TEXT("relying"),
         TEXT("predict"),
         TEXT("blocked"),
         TEXT("belfast"),
         TEXT("varying"),
         TEXT("tsunami"),
         TEXT("scholar"),
         TEXT("coating"),
         TEXT("boating"),
         TEXT("gilbert"),
         TEXT("ambient"),
         TEXT("hyundai"),
         TEXT("vampire"),
         TEXT("framing"),
         TEXT("pockets"),
         TEXT("pushing"),
         TEXT("mustang"),
         TEXT("runtime"),
         TEXT("decimal"),
         TEXT("miracle"),
         TEXT("hamburg"),
         TEXT("fathers"),
         TEXT("marking"),
         TEXT("preston"),
         TEXT("longest"),
         TEXT("destiny"),
         TEXT("blowing"),
         TEXT("numeric"),
         TEXT("skating"),
         TEXT("proudly"),
         TEXT("obesity"),
         TEXT("touring"),
         TEXT("travels"),
         TEXT("delight"),
         TEXT("counted"),
         TEXT("tragedy"),
         TEXT("painful"),
         TEXT("rebound"),
         TEXT("sherman"),
         TEXT("triumph"),
         TEXT("welding"),
         TEXT("locking"),
         TEXT("blanket"),
         TEXT("justify"),
         TEXT("backing"),
         TEXT("figured"),
         TEXT("surgeon"),
         TEXT("deborah"),
         TEXT("gabriel"),
         TEXT("auditor"),
         TEXT("bracket"),
         TEXT("harmful"),
         TEXT("glucose"),
         TEXT("phantom"),
         TEXT("persian"),
         TEXT("novelty"),
         TEXT("budgets"),
         TEXT("erotica"),
         TEXT("webcast"),
         TEXT("jumping"),
         TEXT("fabrics"),
         TEXT("polymer"),
         TEXT("poultry"),
         TEXT("cleanup"),
         TEXT("compute"),
         TEXT("touched"),
         TEXT("search"),
         TEXT("should"),
         TEXT("policy"),
         TEXT("number"),
         TEXT("rights"),
         TEXT("public"),
         TEXT("united"),
         TEXT("travel"),
         TEXT("hotels"),
         TEXT("design"),
         TEXT("posted"),
         TEXT("family"),
         TEXT("prices"),
         TEXT("county"),
         TEXT("change"),
         TEXT("rating"),
         TEXT("during"),
         TEXT("movies"),
         TEXT("source"),
         TEXT("author"),
         TEXT("around"),
         TEXT("course"),
         TEXT("credit"),
         TEXT("thread"),
         TEXT("market"),
         TEXT("action"),
         TEXT("second"),
         TEXT("forums"),
         TEXT("client"),
         TEXT("sample"),
         TEXT("phones"),
         TEXT("custom"),
         TEXT("almost"),
         TEXT("editor"),
         TEXT("thomas"),
         TEXT("reason"),
         TEXT("spring"),
         TEXT("answer"),
         TEXT("police"),
         TEXT("wanted"),
         TEXT("survey"),
         TEXT("mexico"),
         TEXT("simply"),
         TEXT("master"),
         TEXT("impact"),
         TEXT("strong"),
         TEXT("ground"),
         TEXT("owners"),
         TEXT("budget"),
         TEXT("guides"),
         TEXT("retail"),
         TEXT("trying"),
         TEXT("mother"),
         TEXT("joined"),
         TEXT("modern"),
         TEXT("senior"),
         TEXT("charge"),
         TEXT("jackie"),
         TEXT("brutal"),
         TEXT("yields"),
         TEXT("suited"),
         TEXT("blacks"),
         TEXT("curves"),
         TEXT("waiver"),
         TEXT("bufing"),
         TEXT("julian"),
         TEXT("brunei"),
         TEXT("slovak"),
         TEXT("remind"),
         TEXT("washer"),
         TEXT("mentor"),
         TEXT("fought"),
         TEXT("pencil"),
         TEXT("ratios"),
         TEXT("walnut"),
         TEXT("gently"),
         TEXT("fridge"),
         TEXT("blades"),
         TEXT("advert"),
         TEXT("travis"),
         TEXT("forbes"),
         TEXT("gerald"),
         TEXT("hunger"),
         TEXT("naples"),
         TEXT("prozac"),
         TEXT("newark"),
         TEXT("warned"),
         TEXT("neural"),
         TEXT("movers"),
         TEXT("verbal"),
         TEXT("bryant"),
         TEXT("voyuer"),
         TEXT("garmin"),
         TEXT("carmen"),
         TEXT("impose"),
         TEXT("favour"),
         TEXT("roland"),
         TEXT("mounts"),
         TEXT("michel"),
         TEXT("subtle"),
         TEXT("cradle"),
         TEXT("virtue"),
         TEXT("corpus"),
         TEXT("ultram"),
         TEXT("maiden"),
         TEXT("myrtle"),
         TEXT("bother"),
         TEXT("bhutan"),
         TEXT("mating"),
         TEXT("unwrap"),
         TEXT("wagner"),
         TEXT("scared"),
         TEXT("asylum"),
         TEXT("about"),
         TEXT("other"),
         TEXT("their"),
         TEXT("first"),
         TEXT("would"),
         TEXT("price"),
         TEXT("carlo"),
         TEXT("tiles"),
         TEXT("tamil"),
         TEXT("grams"),
         TEXT("forge"),
         TEXT("brave"),
         TEXT("awful"),
         TEXT("wagon"),
         TEXT("quilt"),
         TEXT("notre"),
         TEXT("flour"),
         TEXT("choir"),
         TEXT("blond"),
         TEXT("burst"),
         TEXT("wiley"),
         TEXT("fibre"),
         TEXT("daisy"),
         TEXT("crude"),
         TEXT("bored"),
         TEXT("fares"),
         TEXT("hoped"),
         TEXT("safer"),
         TEXT("marsh"),
         TEXT("ricky"),
         TEXT("stake"),
         TEXT("this"),
         TEXT("with"),
         TEXT("from"),
         TEXT("your"),
         TEXT("have"),
         TEXT("more"),
         TEXT("home"),
         TEXT("page"),
         TEXT("time"),
         TEXT("they"),
         TEXT("site"),
         TEXT("what"),
         TEXT("news"),
         TEXT("only"),
         TEXT("when"),
         TEXT("also"),
         TEXT("help"),
         TEXT("view"),
         TEXT("some"),
         TEXT("like"),
         TEXT("than"),
         TEXT("find"),
         TEXT("date"),
         TEXT("back"),
         TEXT("list"),
         TEXT("name"),
         TEXT("just"),
         TEXT("over"),
         TEXT("year"),
         TEXT("into"),
         TEXT("next"),
         TEXT("used"),
         TEXT("work"),
         TEXT("last"),
         TEXT("most"),
         TEXT("make"),
         TEXT("them"),
         TEXT("post"),
         TEXT("city"),
         TEXT("such"),
         TEXT("link"),
         TEXT("open"),
         TEXT("case"),
         TEXT("same"),
         TEXT("both"),
         TEXT("game"),
         TEXT("care"),
         TEXT("down"),
         TEXT("size"),
         TEXT("shop"),
         TEXT("rate"),
         TEXT("form"),
         TEXT("love"),
         TEXT("john"),
         TEXT("main"),
         TEXT("save"),
         TEXT("york"),
         TEXT("card"),
         TEXT("jobs"),
         TEXT("sale"),
         TEXT("join"),
         TEXT("west"),
         TEXT("left"),
         TEXT("team"),
         TEXT("note"),
         TEXT("live"),
         TEXT("june"),
         TEXT("plan"),
         TEXT("cost"),
         TEXT("july"),
         TEXT("come"),
         TEXT("cart"),
         TEXT("play"),
         TEXT("blog"),
         TEXT("park"),
         TEXT("side"),
         TEXT("give"),
         TEXT("body"),
         TEXT("east"),
         TEXT("pubs"),
         TEXT("mild"),
         TEXT("clan"),
         TEXT("sync"),
         TEXT("mesa"),
         TEXT("shed"),
         TEXT("tide"),
         TEXT("funk"),
         TEXT("bind"),
         TEXT("rand"),
         TEXT("buck"),
         TEXT("acre"),
         TEXT("lows"),
         TEXT("chen"),
         TEXT("pest"),
         TEXT("chan"),
         TEXT("beth"),
         TEXT("sofa"),
         TEXT("dans"),
         TEXT("dept"),
         TEXT("hack"),
         TEXT("dare"),
         TEXT("hawk"),
         TEXT("lamb"),
         TEXT("junk"),
         TEXT("lucy"),
         TEXT("hans"),
         TEXT("poet"),
         TEXT("epic"),
         TEXT("sake"),
         TEXT("lean"),
         TEXT("luis"),
         TEXT("alto"),
         TEXT("gore"),
         TEXT("cult"),
         TEXT("dash"),
         TEXT("cage"),
         TEXT("divx"),
         TEXT("jake"),
         TEXT("eval"),
         TEXT("ping"),
         TEXT("flux"),
         TEXT("muze"),
         TEXT("oman"),
         TEXT("rage"),
         TEXT("abs"),
         TEXT("sim"),
         TEXT("rna"),
         TEXT("rid"),
         TEXT("rip"),
         TEXT("buf"),
         TEXT("sol"),
         TEXT("eco"),
         TEXT("bat"),
         TEXT("lip"),
         TEXT("sap"),
         TEXT("ict"),
         TEXT("sku"),
         TEXT("pts"),
         TEXT("nhs"),
         TEXT("aye"),
         TEXT("ste"),
         TEXT("col"),
         TEXT("une"),
         TEXT("tex"),
         TEXT("cia"),
         TEXT("neo"),
         TEXT("dig"),
         TEXT("nat"),
         TEXT("dpi"),
         TEXT("gis"),
         TEXT("loc"),
         TEXT("gui"),
         TEXT("ver"),
         TEXT("rim"),
         TEXT("zen"),
         TEXT("dis"),
         TEXT("kay"),
         TEXT("ser"),
         TEXT("fwd"),
         TEXT("aus"),
         TEXT("hwy"),
         TEXT("nam"),
         TEXT("gdp"),
         TEXT("pig"),
         TEXT("lit"),
         TEXT("una"),
         TEXT("yrs"),
         TEXT("gba"),
         TEXT("sig"),
         TEXT("duo"),
         TEXT("fog"),
         TEXT("str"),
         TEXT("vip"),
         TEXT("yea"),
         TEXT("fur"),
         TEXT("tar"),
         TEXT("soc"),
         TEXT("rug"),
         TEXT("dem"),
         TEXT("wav"),
         TEXT("ham"),
         TEXT("fbi"),
         TEXT("tba"),
         TEXT("sie"),
         TEXT("eva"),
         TEXT("rca"),
         TEXT("gst"),
         TEXT("bon"),
         TEXT("mas"),
         TEXT("len"),
         TEXT("kai"),
         TEXT("dom"),
         TEXT("obj"),
         TEXT("jar"),
         TEXT("cos"),
         TEXT("pac"),
         TEXT("erp"),
         TEXT("vpn"),
         TEXT("eds"),
         TEXT("wax"),
         TEXT("nut"),
         TEXT("irs"),
         TEXT("bye"),
         TEXT("cdt"),
         TEXT("eau"),
         TEXT("mil"),
         TEXT("lap"),
         TEXT("sao"),
         TEXT("gmc"),
         TEXT("asn"),
         TEXT("ant"),
         TEXT("apt"),
         TEXT("inf"),
         TEXT("eos"),
         TEXT("vcr"),
         TEXT("uri"),
         TEXT("gem"),
         TEXT("psi"),
         TEXT("pct"),
         TEXT("qld"),
         TEXT("pas"),
         TEXT("liz"),
         TEXT("boc"),
         TEXT("tmp"),
         TEXT("ate"),
         TEXT("fin"),
         TEXT("mud"),
         TEXT("uni"),
         TEXT("dip"),
         TEXT("nbc"),
         TEXT("mpg"),
         TEXT("cas"),
         TEXT("cio"),
         TEXT("dow"),
         TEXT("upc"),
         TEXT("dui"),
         TEXT("yen"),
         TEXT("lid"),
         TEXT("pvc"),
         TEXT("enb"),
         TEXT("til"),
         TEXT("wto"),
         TEXT("hay"),
         TEXT("isa"),
         TEXT("pix"),
         TEXT("mic"),
         TEXT("nil"),
         TEXT("pam"),
         TEXT("cop"),
         TEXT("dim"),
         TEXT("mai"),
         TEXT("abu"),
         TEXT("mtv"),
         TEXT("leu"),
         TEXT("lou"),
         TEXT("sip"),
         TEXT("mae"),
         TEXT("mel"),
         TEXT("sic"),
         TEXT("seq"),
         TEXT("wma"),
         TEXT("cir"),
         TEXT("acm"),
         TEXT("ips"),
         TEXT("dsc"),
         TEXT("mia"),
         TEXT("wan"),
         TEXT("gtk"),
         TEXT("ira"),
         TEXT("sen"),
         TEXT("dts"),
         TEXT("pod"),
         TEXT("dat"),
         TEXT("soa"),
         TEXT("cho"),
         TEXT("wit"),
         TEXT("ind"),
         TEXT("qui"),
         TEXT("mug"),
         TEXT("ids"),
         TEXT("of"),
         TEXT("to"),
         TEXT("in"),
         TEXT("is"),
         TEXT("on"),
         TEXT("by"),
         TEXT("it"),
         TEXT("or"),
         TEXT("be"),
         TEXT("at"),
         TEXT("as"),
         TEXT("an"),
         TEXT("we"),
         TEXT("us"),
         TEXT("if"),
         TEXT("my"),
         TEXT("do"),
         TEXT("no"),
         TEXT("he"),
         TEXT("up"),
         TEXT("so"),
         TEXT("pm"),
         TEXT("am"),
         TEXT("me"),
         TEXT("re"),
         TEXT("go"),
         TEXT("de"),
         TEXT("uk"),
         TEXT("cd"),
         TEXT("tv"),
         TEXT("la"),
         TEXT("pc"),
         TEXT("ca"),
         TEXT("al"),
         TEXT("id"),
         TEXT("co"),
         TEXT("et"),
         TEXT("st"),
         TEXT("en"),
         TEXT("oh"),
         TEXT("ad"),
         TEXT("ny")};

    Words = GetValidWords(WordList);

    InitGame(); // Setting Up Game
}

void UBullCowCartridge::OnInput(const FString &Input) // When the player hits enter
{
    if (bGameOver)
    {
        ClearScreen();
        InitGame();
    }
    else
    {
        ProcessGuess(Input);
    }
}

void UBullCowCartridge::InitGame()
{
    HiddenWord = Words[FMath::RandRange(0, Words.Num() - 1)];
    //PrintLine(TEXT("%s"), *HiddenWord);
    Lives = HiddenWord.Len() * 2;
    bGameOver = false;

    //Welcoming The Player
    PrintLine(TEXT("Welcome to the Bulls and Cows Game !"));
    PrintLine(TEXT("Guess the %d letters word !"), HiddenWord.Len());
    PrintLine(TEXT("Click and press TAB to write into the terminal..."));
    PrintLine(TEXT("Type in and press enter to validate your answer"));

    //const TCHAR HW[] = TEXT("cakes"); // or const char HW[] = "cakes";
    // or {TEXT('c'),TEXT('a'),TEXT('k'),TEXT('e'),TEXT('s'),TEXT('\0')}
}

void UBullCowCartridge::EndGame()
{
    bGameOver = true;
    PrintLine(TEXT("The hidden word was %s"), *HiddenWord);
    PrintLine(TEXT("\nPress enter to play again."));
}

void UBullCowCartridge::ProcessGuess(const FString &Guess)
{

    if (Guess == HiddenWord)
    {
        PrintLine(TEXT("You win !"));
        EndGame();
        return;
    }

    //Check If Right Length
    if (HiddenWord.Len() != Guess.Len())
    {
        PrintLine(TEXT("The length of the hidden word is %d, guess again"), HiddenWord.Len());
        return;
    }

    //Check If Isogram
    if (!IsIsogram(Guess))
    {
        PrintLine(TEXT("No repeating letters, guess again"), HiddenWord.Len());
        return;
    }

    //Remove Lives
    --Lives;
    PrintLine(TEXT("You lost a life."));

    //Show Lives Left
    if (Lives >= 1)
    {
        PrintLine(TEXT("Sorry, try guessing again !"));
        if (Lives == 1)
        {
            PrintLine(TEXT("Remaining life: %d"), Lives);
        }
        else
        {
            PrintLine(TEXT("Remaining lives: %d"), Lives);
        }
    }
    else
    {
        PrintLine(TEXT("You have no life remaining ! Game Over !"));
        bGameOver = false;
        EndGame();
        return;
    }

    //Show The Player The Bulls And Cows
    //int32 Bulls, Cows; // Pas d'initialisation car ce sont des out parameters
    Count = GetBullsCows(Guess);
    PrintLine(TEXT("You have %d Bulls and %d Cows"), Count.Bulls, Count.Cows);
}

bool UBullCowCartridge::IsIsogram(const FString &Guess) const
{
    for (int32 i = 0; i < Guess.Len(); i++)
    {
        for (int32 j = 0; j < Guess.Len(); j++)
        {
            if (Guess[i] == Guess[j] && i != j)
            {
                return (false);
            }
        }
    }
    return (true);
}

TArray<FString> UBullCowCartridge::GetValidWords(const TArray<FString> &Words)
{
    TArray<FString> ValidWords;
    for (FString TMPWords : Words) // loop sans index
    {
        if (TMPWords.Len() >= 4 && TMPWords.Len() <= 8 && IsIsogram(TMPWords))
        {
            ValidWords.Emplace(TMPWords);
        }
    }
    return (ValidWords);
}

FBullCowCount UBullCowCartridge::GetBullsCows(const FString &Guess) const
{
    //FBullCowCount Count = {1,2}; //attribue les valeurs 1 et 2 aux 2 variables dans la structure
    FBullCowCount Count;

    for (int32 i = 0; i < Guess.Len(); i++)
    {
        if (Guess[i] == HiddenWord[i])
        {
            Count.Bulls++;
            continue;
        }
        for (int32 j = 0; j < Guess.Len(); j++)
        {
            if (Guess[i] == HiddenWord[j] && j != i)
            {
                Count.Cows++;
                break;
            }
        }
    }
    return (Count);
}
