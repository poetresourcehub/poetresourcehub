// All 402 Poetry Organizations - 2025
const organizations = [
    // MAJOR NATIONAL AND INTERNATIONAL ORGANIZATIONS (10)
    {
        name: "Academy of American Poets",
        url: "https://poets.org",
        category: "Major Organizations",
        categoryUrl: "major-organizations.html"
    },
    {
        name: "Poetry Foundation",
        url: "https://www.poetryfoundation.org",
        category: "Major Organizations",
        categoryUrl: "major-organizations.html"
    },
    {
        name: "Poetry Society of America",
        url: "https://poetrysociety.org",
        category: "Major Organizations",
        categoryUrl: "major-organizations.html"
    },
    {
        name: "The Poetry Coalition",
        url: "https://poets.org/academy-american-poets/poetry-coalition",
        category: "Major Organizations",
        categoryUrl: "major-organizations.html"
    },
    {
        name: "Poetry Society (UK)",
        url: "https://poetrysociety.org.uk",
        category: "Major Organizations",
        categoryUrl: "major-organizations.html"
    },
    {
        name: "New England Poetry Club",
        url: "https://nepoetryclub.org",
        category: "Major Organizations",
        categoryUrl: "major-organizations.html"
    },
    {
        name: "Griffin Poetry Prize",
        url: "https://griffinpoetryprize.com",
        category: "Major Organizations",
        categoryUrl: "major-organizations.html"
    },
    {
        name: "Poets & Writers, Inc.",
        url: "https://www.pw.org",
        category: "Major Organizations",
        categoryUrl: "major-organizations.html"
    },
    {
        name: "Poets House",
        url: "https://www.poetshouse.org",
        category: "Major Organizations",
        categoryUrl: "major-organizations.html"
    },
    {
        name: "AWP (Association of Writers & Writing Programs)",
        url: "https://www.awpwriter.org",
        category: "Major Organizations",
        categoryUrl: "major-organizations.html"
    },

    // LITERARY MAGAZINES AND JOURNALS (167)
    {
        name: "Poetry Magazine (Poetry Foundation)",
        url: "https://www.poetryfoundation.org/magazines/poetry",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "The Paris Review",
        url: "https://www.theparisreview.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "The New Yorker",
        url: "https://www.newyorker.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Ploughshares",
        url: "https://pshares.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Kenyon Review",
        url: "https://kenyonreview.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "The Yale Review",
        url: "https://www.yalereview.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "The Hudson Review",
        url: "https://www.hudsonreview.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Boston Review",
        url: "https://www.bostonreview.net",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "American Poetry Review",
        url: "https://www.aprweb.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "The Southern Review",
        url: "https://lsu.edu/thesouthernreview",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "AGNI",
        url: "https://www.bu.edu/agni",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Tin House",
        url: "https://www.tinhouse.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Georgia Review",
        url: "https://georgireview.uga.edu",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Shenandoah",
        url: "https://shenandoahlit.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Rattle",
        url: "https://www.rattle.submittable.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Conduit",
        url: "https://www.conduit.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Denver Quarterly",
        url: "https://denverquarterly.submittable.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "FIELD",
        url: "https://www.oberlin.edu/field-magazine",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Gulf Coast",
        url: "https://www.gulfcoastmag.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Raritan",
        url: "https://www.raritanquarterly.rutgers.edu",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "The Common",
        url: "https://www.thecommononline.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Green Mountains Review",
        url: "https://greenmountainsreview.middlebury.edu",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Jubilat",
        url: "https://www.jubilat.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "River Styx",
        url: "https://riverstyx.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Subtropics",
        url: "https://www.english.ufl.edu/subtropics",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Black Warrior Review",
        url: "https://bwr.ua.edu",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Carolina Quarterly",
        url: "https://www.thecarolinaquarterly.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Colorado Review",
        url: "https://coloradoreview.colostate.edu",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "The Greensboro Review",
        url: "https://www.uncg.edu/eng/mfa/greensboro-review",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Hayden's Ferry Review",
        url: "https://haydensferryreview.asu.edu",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "The Atlantic Monthly",
        url: "https://www.theatlantic.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Iron Horse Literary Review",
        url: "https://www.ironhorseliterary.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Spillway",
        url: "https://www.redhen.org/spillway",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Terrain.org",
        url: "https://www.terrain.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "The Volta",
        url: "https://www.thevoltagallery.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Copper Nickel",
        url: "https://coppernickelmag.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Barrow Street",
        url: "https://www.barrowstreetjournal.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Columbia Poetry Review",
        url: "https://www.columbiapoetryreview.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Gettysburg Review",
        url: "https://www.gettysburgreview.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Mid-American Review",
        url: "https://www.bgsu.edu/midamerican",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Muzzle",
        url: "https://www.muzzlemagazine.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Ninth Letter",
        url: "https://www.english.illinois.edu/ninthletters",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "West Branch",
        url: "https://westbranch.bucknell.edu",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Cream City Review",
        url: "https://creamcityreview.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Harpur Palate",
        url: "https://www2.binghamton.edu/harpur-palate",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "The Hampden-Sydney Poetry Review",
        url: "https://www.hsc.edu/poetry-review",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "House Organ",
        url: "https://www.housecomplexjournal.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Little Patuxent Review",
        url: "https://www.littlepatuxentreview.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Missouri Review",
        url: "https://www.missourireview.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "32 Poems",
        url: "https://www.32poems.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Fence",
        url: "https://fencemag.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Los Angeles Review",
        url: "https://www.losangelesreview.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Southern Indiana Review",
        url: "https://www.uofs.edu/English/sir",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Willow Springs",
        url: "https://willowspringsmagazine.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "RHINO Poetry",
        url: "https://www.rhinopoetry.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Commonweal Magazine",
        url: "https://www.commonwealmagazine.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "CutBank Literary Magazine",
        url: "https://www.cutbankmag.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Plume Poetry",
        url: "https://plumepoetry.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Poet Lore",
        url: "https://www.poetlore.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Sugar House Review",
        url: "https://www.sugarhousereview.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Poetry London",
        url: "https://poetrylondon.co.uk",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Flyway Journal of Writing and Environment",
        url: "https://www.flyway.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Spry Literary Journal",
        url: "https://www.sprylit.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "diode poetry journal",
        url: "https://diodepoetry.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Blackbird",
        url: "https://blackbird.vcu.edu",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "The Sun",
        url: "https://www.thesunmagazine.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "The Offing",
        url: "https://theoffingmag.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Bat City Review",
        url: "https://www.batcityreview.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Quarterly West",
        url: "https://www.quarterlywest.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "The Raleigh Review",
        url: "https://www.theraleighreview.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Prole",
        url: "https://prolejournal.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Inkfish Magazine",
        url: "https://www.inkfishmag.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Poetry Ireland Review",
        url: "https://poetryireland.ie",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Modern Poetry in Translation",
        url: "https://www.mptmagazine.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Shearsman Magazine",
        url: "https://www.shearsman.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Shooter Literary Magazine",
        url: "https://www.shooterlitmag.co.uk",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Fourteen Poems",
        url: "https://www.fourteenpoems.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "The Poetry Review (UK Poetry Society)",
        url: "https://poetrysociety.org.uk/poetry-review",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Granta",
        url: "https://granta.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Ambit",
        url: "https://www.ambitmagazine.co.uk",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "The Rialto",
        url: "https://www.therialto.co.uk",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "PN Review (Carcanet)",
        url: "https://www.pnreview.co.uk",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Magma",
        url: "https://www.magmapoetry.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "New Welsh Review",
        url: "https://www.newwelshreview.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Hobart",
        url: "https://www.hobartpulp.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Diagram",
        url: "https://thediagrammag.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Glass: A Journal of Poetry",
        url: "https://glasspoetry.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Thrush Poetry Journal",
        url: "https://www.thrushpoetry.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Beloit Poetry Journal",
        url: "https://www.bpj.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Passages North",
        url: "https://www.passagesnorth.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Third Coast Magazine",
        url: "https://thirdcoastmagazine.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Michigan Quarterly Review",
        url: "https://sites.lsa.umich.edu/mqr",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "The Minnesota Review",
        url: "https://minnesotareview.wordpress.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Crab Orchard Review",
        url: "https://www.siucraborchardreview.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Southeast Review",
        url: "https://www.southeastreview.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Image Journal",
        url: "https://imagejournal.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "About Place Journal",
        url: "https://aboutplacejournal.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Ecotone Magazine",
        url: "https://ecotonemagazine.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Hellbender Magazine",
        url: "https://hellbendermag.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Tahoma Literary Review",
        url: "https://tahomaliteraryreview.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Prairie Schooner",
        url: "https://prairieschooner.unl.edu",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "New Letters",
        url: "https://newletters.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Indiana Review",
        url: "https://indianareview.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "North American Review",
        url: "https://northamericanreview.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Epoch",
        url: "https://english.cornell.edu/publications/epoch",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Iowa Review",
        url: "https://iowareview.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "The Journal",
        url: "https://www.ohiostate.edu/academics/english/journal",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Cimarron Review",
        url: "https://cimarronreview.okstate.edu",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Guernica",
        url: "https://www.guernicamag.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Salmagundi",
        url: "https://salmagundi.skidmore.edu",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Saranac Review",
        url: "https://www.saracanreview.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Slate",
        url: "https://slate.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "The Believer",
        url: "https://believer.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "The Moth",
        url: "https://www.themothmagazine.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Mslexia",
        url: "https://www.mslexia.co.uk",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Propel Magazine",
        url: "https://propelmagazine.co.uk",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Crazyhorse",
        url: "https://www.crazyhorsemagazine.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "TriQuarterly",
        url: "https://sites.northwestern.edu/triquarterly",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Poetry Northwest",
        url: "https://www.poetrynorthwest.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Zyzzyva",
        url: "https://www.zyzzyva.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "The Lake: contemporary poetry webzine",
        url: "https://www.lakemag.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Split Rock Review",
        url: "https://www.splitrockreview.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Bellingham Review",
        url: "https://www.bhreview.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Chautauqua Journal",
        url: "https://www.chq.org/things-to-do/education/literary-arts/chautauqua-journal/",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "StoryQuarterly",
        url: "https://www.northwestern.edu/storyquarterly",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "The Masters Review: New Voices",
        url: "https://www.mastersliteraryjournal.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Jet Fuel Review",
        url: "https://www.jetfuelreview.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "The Collagist",
        url: "https://www.thecollagist.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Powder Keg",
        url: "https://www.powderkegmagazine.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Redivider",
        url: "https://redivider.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Eunoia Review",
        url: "https://eunoiareview.wordpress.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Sky Island Journal",
        url: "https://skyislandjournal.submittable.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Only Poems",
        url: "https://www.onlypoems.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Palette Poetry",
        url: "https://www.palettepoetry.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Poetry Online",
        url: "https://poets.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Anomaly Poetry Anthology Series",
        url: "https://poets.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Apex Magazine",
        url: "https://www.apex-magazine.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Apple in the Dark Journal",
        url: "https://poets.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Arc Poetry Magazine",
        url: "https://www.arcpoetry.ca",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Clarkesworld: Science Fiction & Fantasy Magazine",
        url: "https://clarkesworldmagazine.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Cloudbank: journal of contemporary writing",
        url: "https://www.cloudbankjournal.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Columbia Journal",
        url: "https://columbiajournaljournal.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "CommuterLit",
        url: "https://www.commuter-lit.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Deep Wild Journal Writing from the Backcountry",
        url: "https://poets.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Defenestration: A Literary Magazine Dedicated to Humor",
        url: "https://www.defenestrationjournal.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Dogwood: A Journal of Poetry and Prose",
        url: "https://dogwoodmagazine.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Jersey Devil Press",
        url: "https://www.jerseydevilpress.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Josephine Quarterly",
        url: "https://josephinequarterly.wordpress.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Juniper: A Poetry Journal",
        url: "https://www.juniperjournal.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Kaleidoscope Magazine",
        url: "https://www.kaleidoscopemagazine.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Pictura Journal",
        url: "https://picturajournal.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Pinhole Poetry",
        url: "https://poets.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Waxwing",
        url: "https://www.waxwingmagazine.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Coffin Bell",
        url: "https://www.coffinbell.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Wilder Poetry Journal",
        url: "https://www.wilderliteraryjournal.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Chiron Review",
        url: "https://poets.org",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },
    {
        name: "Connecticut Review",
        url: "https://connecticutriverreview.submittable.com",
        category: "Literary Magazines",
        categoryUrl: "literary-magazines.html"
    },

    // POETRY PUBLISHERS (57)
    {
        name: "Carcanet Press",
        url: "https://www.carcanet.org",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Nightboat Books",
        url: "https://nightboat.org",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Copper Canyon Press",
        url: "https://www.coppercanyonpress.org",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "C&R Press",
        url: "https://crpress.org",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Four Way Books",
        url: "https://fourwaybooks.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Sarabande Books",
        url: "https://www.sarabandebooks.org",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Graywolf Press",
        url: "https://www.graywolfpress.org",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Perugia Press",
        url: "https://www.perugia.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Alice James Books",
        url: "https://www.alicejamesbooks.org",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Tupelo Press",
        url: "https://tupelopress.org",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Persea Books",
        url: "https://www.perseabooks.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Faber & Faber",
        url: "https://www.faber.co.uk",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Able Muse",
        url: "https://www.ablemuse.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Saturnalia Books",
        url: "https://www.saturnaliabooks.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Trio House Press",
        url: "https://www.triohaus.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "BlazeVOX",
        url: "https://www.blazevox.org",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Two Sylvias Press",
        url: "https://twosylviaspress.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Wipf & Stock (Poiema Series)",
        url: "https://www.wipfandstock.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Sundress Publishing",
        url: "https://www.sundresspub.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Ekstasis Editions",
        url: "https://www.ekstasiseditions.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Coach House Books",
        url: "https://www.chbooks.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Fremantle Press",
        url: "https://www.fremantlepress.com.au",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Doubleback Books",
        url: "https://www.doublebackbooks.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Lamar University Press",
        url: "https://www.lamar.edu/press",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Wolsak and Wynn",
        url: "https://www.wolsakwynn.ca",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Clash Books",
        url: "https://www.clashbooks.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Invisible Publishing",
        url: "https://www.invisiblepublishing.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Alaska Literary Series",
        url: "https://www.uaf.edu/press",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Black Ocean",
        url: "https://www.blackocean.org",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Vine Leaves Press",
        url: "https://www.vineleavespress.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Broadstone Books",
        url: "https://www.broadstonepoetry.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Jackleg Press",
        url: "https://www.jacklegpress.org",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Moon Tide Press",
        url: "https://www.moontidespress.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Freelines Press",
        url: "https://www.freelinespress.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Hidden Peak Press",
        url: "https://hiddenpeak.org",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Wet Cement Press",
        url: "https://www.wetcementpress.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Turnstone Press",
        url: "https://www.turnstonepress.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Third Man Books",
        url: "https://www.thirdmanbooks.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Wakefield Press",
        url: "https://www.wakefieldpress.com.au",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Ronsdale Press",
        url: "https://www.ronsdalepres.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Shanti Arts",
        url: "https://www.shantiarts.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Ranger Press (RPRESS)",
        url: "https://www.rangerpress.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Autumn House Press",
        url: "https://www.autumnhouse.org",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Unnamed Press",
        url: "https://unnamedpress.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "City Lights Booksellers & Publishers",
        url: "https://www.citylights.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Catapult Books",
        url: "https://www.catapult.co",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Burnside Review Press",
        url: "https://www.burnsidereview.org",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Anamcara Press",
        url: "https://www.anamcarapress.org",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Unicorn Press",
        url: "https://www.unicornpressbooks.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "BloodAxe Books",
        url: "https://www.bloodaxebooks.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Penguin Random House",
        url: "https://www.penguinrandomhouse.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Hachette Book Group",
        url: "https://www.hachettebookgroup.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "HarperCollins",
        url: "https://www.harpercollins.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Macmillan Publishers",
        url: "https://www.macmillan.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Simon & Schuster",
        url: "https://www.simonandschuster.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Wave Books",
        url: "https://www.wavepoetry.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },
    {
        name: "Fernwood Press",
        url: "https://www.fernwoodpress.com",
        category: "Poetry Publishers",
        categoryUrl: "publishers.html"
    },

    // UNIVERSITY-BASED POETRY PROGRAMS AND MFA CENTERS (20)
    {
        name: "Iowa Writers' Workshop",
        url: "https://writersworkshop.uiowa.edu",
        category: "MFA Programs",
        categoryUrl: "mfa-programs.html"
    },
    {
        name: "Johns Hopkins University Writing Seminars",
        url: "https://www.jhu.edu/writingseminars",
        category: "MFA Programs",
        categoryUrl: "mfa-programs.html"
    },
    {
        name: "Brown University Literary Arts Program",
        url: "https://www.brown.edu/academics/literary-arts",
        category: "MFA Programs",
        categoryUrl: "mfa-programs.html"
    },
    {
        name: "Syracuse University MFA Creative Writing",
        url: "https://www.esf.edu/creativewriting",
        category: "MFA Programs",
        categoryUrl: "mfa-programs.html"
    },
    {
        name: "Cornell University MFA",
        url: "https://www.cornell.edu",
        category: "MFA Programs",
        categoryUrl: "mfa-programs.html"
    },
    {
        name: "NYU MFA Creative Writing",
        url: "https://tisch.nyu.edu/grad/creative-writing",
        category: "MFA Programs",
        categoryUrl: "mfa-programs.html"
    },
    {
        name: "University of Pittsburgh MFA",
        url: "https://www.english.pitt.edu/graduate/creative-writing",
        category: "MFA Programs",
        categoryUrl: "mfa-programs.html"
    },
    {
        name: "Washington University in St. Louis MFA",
        url: "https://english.wustl.edu/mfa-program",
        category: "MFA Programs",
        categoryUrl: "mfa-programs.html"
    },
    {
        name: "Arizona State University MFA",
        url: "https://asunow.asu.edu/20231003-mfa-creative-writing",
        category: "MFA Programs",
        categoryUrl: "mfa-programs.html"
    },
    {
        name: "Warren Wilson College MFA",
        url: "https://www.warren-wilson.edu/academics/mfa-creative-writing",
        category: "MFA Programs",
        categoryUrl: "mfa-programs.html"
    },
    {
        name: "Vermont College of Fine Arts MFA",
        url: "https://www.vcfa.edu",
        category: "MFA Programs",
        categoryUrl: "mfa-programs.html"
    },
    {
        name: "Hollins University MFA",
        url: "https://www.hollins.edu/academics/graduate/mfa-creative-writing",
        category: "MFA Programs",
        categoryUrl: "mfa-programs.html"
    },
    {
        name: "Sarah Lawrence College MFA",
        url: "https://www.sarahlawrence.edu/mfa-creative-writing",
        category: "MFA Programs",
        categoryUrl: "mfa-programs.html"
    },
    {
        name: "Columbia College Chicago MFA",
        url: "https://www.colum.edu/academics/creativewriting",
        category: "MFA Programs",
        categoryUrl: "mfa-programs.html"
    },
    {
        name: "Hunter College MFA",
        url: "https://www.hunter.cuny.edu/english/graduate/creative-writing-mfa",
        category: "MFA Programs",
        categoryUrl: "mfa-programs.html"
    },
    {
        name: "University of Arizona Poetry Center",
        url: "https://poetry.arizona.edu",
        category: "MFA Programs",
        categoryUrl: "mfa-programs.html"
    },
    {
        name: "Boise State University (Ahsahta Press)",
        url: "https://ahshtapress.boisestate.edu",
        category: "MFA Programs",
        categoryUrl: "mfa-programs.html"
    },
    {
        name: "Stanford University Stegner Fellowship",
        url: "https://stegner.stanford.edu",
        category: "MFA Programs",
        categoryUrl: "mfa-programs.html"
    },
    {
        name: "University of Cincinnati",
        url: "https://www.uc.edu",
        category: "MFA Programs",
        categoryUrl: "mfa-programs.html"
    },
    {
        name: "University of Wisconsin",
        url: "https://www.wisc.edu",
        category: "MFA Programs",
        categoryUrl: "mfa-programs.html"
    },

    // POETRY CONFERENCES AND RESIDENCIES (12)
    {
        name: "Sewanee Writers' Conference",
        url: "https://sewaneewriters.org",
        category: "Conferences & Residencies",
        categoryUrl: "conferences.html"
    },
    {
        name: "Yaddo",
        url: "https://yaddo.org",
        category: "Conferences & Residencies",
        categoryUrl: "conferences.html"
    },
    {
        name: "MacDowell",
        url: "https://macdowell.org",
        category: "Conferences & Residencies",
        categoryUrl: "conferences.html"
    },
    {
        name: "Hedgebrook",
        url: "https://www.hedgebrook.org",
        category: "Conferences & Residencies",
        categoryUrl: "conferences.html"
    },
    {
        name: "Aspen Words",
        url: "https://www.aspenwords.org",
        category: "Conferences & Residencies",
        categoryUrl: "conferences.html"
    },
    {
        name: "The Community of Writers",
        url: "https://communityofwriters.org",
        category: "Conferences & Residencies",
        categoryUrl: "conferences.html"
    },
    {
        name: "Tin House Writers' Workshop",
        url: "https://www.tinhouse.com/writers-workshop",
        category: "Conferences & Residencies",
        categoryUrl: "conferences.html"
    },
    {
        name: "Soul Mountain Retreat",
        url: "https://www.soulmountainretreat.com",
        category: "Conferences & Residencies",
        categoryUrl: "conferences.html"
    },
    {
        name: "Ragdale Foundation",
        url: "https://www.ragdale.org",
        category: "Conferences & Residencies",
        categoryUrl: "conferences.html"
    },
    {
        name: "Breadloaf Writers' Conference",
        url: "https://www.middlebury.edu/bread-loaf-writers-conference",
        category: "Conferences & Residencies",
        categoryUrl: "conferences.html"
    },
    {
        name: "Bread Loaf Environmental Writers' Conference",
        url: "https://www.middlebury.edu/bread-loaf-environmental-writers-conference",
        category: "Conferences & Residencies",
        categoryUrl: "conferences.html"
    },
    {
        name: "Glen Workshop",
        url: "https://www.imagejournal.org/glen-workshop",
        category: "Conferences & Residencies",
        categoryUrl: "conferences.html"
    },

    // ORGANIZATIONS FOR SPECIFIC COMMUNITIES (15)
    {
        name: "Cave Canem",
        url: "https://www.cavecanempoets.org",
        category: "Community Organizations",
        categoryUrl: "community-organizations.html"
    },
    {
        name: "Kundiman",
        url: "https://www.kundiman.org",
        category: "Community Organizations",
        categoryUrl: "community-organizations.html"
    },
    {
        name: "CantoMundo",
        url: "https://www.cantomundo.org",
        category: "Community Organizations",
        categoryUrl: "community-organizations.html"
    },
    {
        name: "Split This Rock",
        url: "https://www.splitthisrock.org",
        category: "Community Organizations",
        categoryUrl: "community-organizations.html"
    },
    {
        name: "Torch Literary Arts",
        url: "https://www.torchlit.org",
        category: "Community Organizations",
        categoryUrl: "community-organizations.html"
    },
    {
        name: "Asian American Writer's Workshop",
        url: "https://aaww.org",
        category: "Community Organizations",
        categoryUrl: "community-organizations.html"
    },
    {
        name: "Busboys and Poets (DC)",
        url: "https://www.busboysandpoets.com",
        category: "Community Organizations",
        categoryUrl: "community-organizations.html"
    },
    {
        name: "Nuyorican Poets Café",
        url: "https://www.nuyorican.org",
        category: "Community Organizations",
        categoryUrl: "community-organizations.html"
    },
    {
        name: "Urban Word NYC",
        url: "https://www.urbanword.org",
        category: "Community Organizations",
        categoryUrl: "community-organizations.html"
    },
    {
        name: "Transfeminine Writers Journal",
        url: "https://www.newwordspress.com",
        category: "Community Organizations",
        categoryUrl: "community-organizations.html"
    },
    {
        name: "Woodsqueer",
        url: "https://www.instagram.com/woodsqueerlit/",
        category: "Community Organizations",
        categoryUrl: "community-organizations.html"
    },
    {
        name: "Gasp Magazine",
        url: "https://www.instagram.com/gaspzine/",
        category: "Community Organizations",
        categoryUrl: "community-organizations.html"
    },
    {
        name: "Plentitude",
        url: "https://plenitudemagazine.ca",
        category: "Community Organizations",
        categoryUrl: "community-organizations.html"
    },
    {
        name: "Lavender Review",
        url: "https://www.lavrev.net",
        category: "Community Organizations",
        categoryUrl: "community-organizations.html"
    },
    {
        name: "Transition Magazine",
        url: "https://transitionmagazine.fas.harvard.edu",
        category: "Community Organizations",
        categoryUrl: "community-organizations.html"
    },

    // POETRY VENUES AND CENTERS (13)
    {
        name: "The Poetry Project at St. Mark's Church",
        url: "https://www.poetryproject.com",
        category: "Poetry Venues",
        categoryUrl: "venues.html"
    },
    {
        name: "The Unterberg Poetry Center (92nd Street Y)",
        url: "https://www.92ndy.org",
        category: "Poetry Venues",
        categoryUrl: "venues.html"
    },
    {
        name: "The Poetry Center and American Poetry Archives",
        url: "https://www.library.ucdavis.edu/poetry-center",
        category: "Poetry Venues",
        categoryUrl: "venues.html"
    },
    {
        name: "The Poetry Center of Chicago",
        url: "https://poetrycenter.org",
        category: "Poetry Venues",
        categoryUrl: "venues.html"
    },
    {
        name: "Jack Straw Writers Program",
        url: "https://www.jackstraworg.org",
        category: "Poetry Venues",
        categoryUrl: "venues.html"
    },
    {
        name: "Literary Arts (Portland)",
        url: "https://www.literary-arts.org",
        category: "Poetry Venues",
        categoryUrl: "venues.html"
    },
    {
        name: "City of Asylum",
        url: "https://cityofasylum.org",
        category: "Poetry Venues",
        categoryUrl: "venues.html"
    },
    {
        name: "GrowHouse",
        url: "https://www.growhousetampa.com",
        category: "Poetry Venues",
        categoryUrl: "venues.html"
    },
    {
        name: "Heard 'Em Say Youth Arts Collective",
        url: "https://www.heardemsay.org",
        category: "Poetry Venues",
        categoryUrl: "venues.html"
    },
    {
        name: "Concord Poetry Center",
        url: "https://concordpoetry.org",
        category: "Poetry Venues",
        categoryUrl: "venues.html"
    },
    {
        name: "Chicago Poetry Project",
        url: "http://chicagopoetryproject.wordpress.com",
        category: "Poetry Venues",
        categoryUrl: "venues.html"
    },
    {
        name: "American Poetry Museum",
        url: "http://www.apoetmuseum.org",
        category: "Poetry Venues",
        categoryUrl: "venues.html"
    },
    {
        name: "The Poetry Forum",
        url: "https://www.poetryforum.org",
        category: "Poetry Venues",
        categoryUrl: "venues.html"
    },

    // REGIONAL AND STATE POETRY SOCIETIES (54)
    {
        name: "Poetry Society of New York",
        url: "https://poetrysocietyny.org",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "National Federation of State Poetry Societies (NFSPS)",
        url: "https://nfsps.net",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Young Poets Network (UK)",
        url: "https://ypn.poetrysociety.org.uk",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Arizona State Poetry Society",
        url: "https://poets.org/listing/arizona-state-poetry-society",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Illinois State Poetry Society",
        url: "https://www.illinoispoets.org",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Kentucky State Poetry Society",
        url: "https://kystatepoetrysociety.org",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Alabama State Poetry Society",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Poets' Roundtable of Arkansas",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "California State Poetry Society",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Columbine Poets of Colorado",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Connecticut Poetry Society",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Florida State Poets Association",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Georgia Poetry Society",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Maine Poets Society",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Massachusetts State Poetry Society",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Poetry Society of Michigan",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "League of Minnesota Poets",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Mississippi Poetry Society",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Missouri State Poetry Society",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Nevada Poetry Society",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "New Mexico State Poetry Society",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Pennsylvania Poetry Society",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Poetry Society of Indiana",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Iowa Poetry Association",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Sunflower Poetry Society of Kansas",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Poetry Society of Louisiana",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Ohio Poetry Association",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Oklahoma State Poetry Society",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Oregon Poetry Association",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "South Dakota State Poetry Society",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Tennessee Poetry Society",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Poetry Society of Texas",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Utah State Poetry Society",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "WyoPoets (Wyoming)",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Free Poets Collective",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "North Carolina Writers' Network",
        url: "https://www.pw.org/directory",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Albany Poets",
        url: "http://scotts.members.sonic.net/albany/guest.html",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Delaware Valley Poets",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Hawaii Writers Guild",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Idaho State Poetry Society",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Maryland State Poetry Society",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Nebraska State Poetry Association",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "New Hampshire Poetry Society",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "New Jersey Poetry Society",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "North Dakota State Poetry Society",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Rhode Island State Poetry Society",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "South Carolina Poetry Society",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Vermont Poetry Society",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Virginia Poetry Society",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "West Virginia Poetry Society",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Washington Poets Association",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Montana State Poetry Society",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },
    {
        name: "Alaska State Poetry Society",
        url: "https://nfsps.net/state-poetry-societies",
        category: "Regional Societies",
        categoryUrl: "regional-societies.html"
    },

    // AWARD PROGRAMS AND PRIZE ORGANIZATIONS (21)
    {
        name: "National Book Award for Poetry",
        url: "https://www.nationalbook.org",
        category: "Awards & Prizes",
        categoryUrl: "awards.html"
    },
    {
        name: "Pulitzer Prize for Poetry",
        url: "https://www.pulitzer.org",
        category: "Awards & Prizes",
        categoryUrl: "awards.html"
    },
    {
        name: "Lambda Literary Awards (Lammy Awards)",
        url: "https://www.lambdaliterary.org",
        category: "Awards & Prizes",
        categoryUrl: "awards.html"
    },
    {
        name: "The Adroit Prizes",
        url: "https://theadroitjournal.org/adroit-prizes",
        category: "Awards & Prizes",
        categoryUrl: "awards.html"
    },
    {
        name: "Stephen Spender Prize",
        url: "https://www.stephenspendertrust.org",
        category: "Awards & Prizes",
        categoryUrl: "awards.html"
    },
    {
        name: "National Poetry Competition (UK)",
        url: "https://poetrysociety.org.uk",
        category: "Awards & Prizes",
        categoryUrl: "awards.html"
    },
    {
        name: "Pushcart Prize",
        url: "https://www.pushcartprize.com",
        category: "Awards & Prizes",
        categoryUrl: "awards.html"
    },
    {
        name: "Best of the Net Award",
        url: "https://www.bestofthenet.org",
        category: "Awards & Prizes",
        categoryUrl: "awards.html"
    },
    {
        name: "Anisfield-Wolf Book Award",
        url: "https://www.anisfield-wolf.org",
        category: "Awards & Prizes",
        categoryUrl: "awards.html"
    },
    {
        name: "Hurston/Wright Legacy Award",
        url: "https://www.hurstonwright.org",
        category: "Awards & Prizes",
        categoryUrl: "awards.html"
    },
    {
        name: "Whiting Award",
        url: "https://www.thewhitingfoundation.org",
        category: "Awards & Prizes",
        categoryUrl: "awards.html"
    },
    {
        name: "James Hearst Poetry Prize",
        url: "https://www.pw.org/grants",
        category: "Awards & Prizes",
        categoryUrl: "awards.html"
    },
    {
        name: "Foster Poetry Prize",
        url: "https://www.pw.org/grants",
        category: "Awards & Prizes",
        categoryUrl: "awards.html"
    },
    {
        name: "Lexi Rudnitsky First Book Prize",
        url: "https://www.pw.org/grants",
        category: "Awards & Prizes",
        categoryUrl: "awards.html"
    },
    {
        name: "Lexi Rudnitsky Editor's Choice Award",
        url: "https://www.pw.org/grants",
        category: "Awards & Prizes",
        categoryUrl: "awards.html"
    },
    {
        name: "Poetic Justice Institute Editor's Prize for BIPOC Writers",
        url: "https://www.pw.org/grants",
        category: "Awards & Prizes",
        categoryUrl: "awards.html"
    },
    {
        name: "Norma Farber First Book Award",
        url: "https://www.poetrysociety.org",
        category: "Awards & Prizes",
        categoryUrl: "awards.html"
    },
    {
        name: "Ruth Lilly Poetry Prize",
        url: "https://www.poetryfoundation.org",
        category: "Awards & Prizes",
        categoryUrl: "awards.html"
    },
    {
        name: "Kate Tufts Discovery Award",
        url: "https://www.claremont.edu",
        category: "Awards & Prizes",
        categoryUrl: "awards.html"
    },
    {
        name: "Agnes Lynch Starrett Poetry Prize",
        url: "https://www.pitt.edu/~press",
        category: "Awards & Prizes",
        categoryUrl: "awards.html"
    },
    {
        name: "Audre Lorde Award for Lesbian Poetry",
        url: "https://www.lambdaliterary.org",
        category: "Awards & Prizes",
        categoryUrl: "awards.html"
    },

    // ONLINE PLATFORMS AND DIGITAL PUBLISHERS (14)
    {
        name: "Frontier Poetry",
        url: "https://www.frontierpoetry.com",
        category: "Online Platforms",
        categoryUrl: "online-platforms.html"
    },
    {
        name: "NaPoWriMo",
        url: "https://www.napowrimo.net",
        category: "Online Platforms",
        categoryUrl: "online-platforms.html"
    },
    {
        name: "Poetry Slam, Inc.",
        url: "https://poetryslam.com",
        category: "Online Platforms",
        categoryUrl: "online-platforms.html"
    },
    {
        name: "CLMP (Community of Literary Magazines and Presses)",
        url: "https://www.clmp.org",
        category: "Online Platforms",
        categoryUrl: "online-platforms.html"
    },
    {
        name: "PANK Magazine",
        url: "https://pankmagazine.com",
        category: "Online Platforms",
        categoryUrl: "online-platforms.html"
    },
    {
        name: "Smartish Pace",
        url: "https://www.smartishpace.com",
        category: "Online Platforms",
        categoryUrl: "online-platforms.html"
    },
    {
        name: "Small Press Traffic",
        url: "https://smallpresstraffic.com",
        category: "Online Platforms",
        categoryUrl: "online-platforms.html"
    },
    {
        name: "Ugly Duckling Presse",
        url: "https://www.uglyducklingpresse.org",
        category: "Online Platforms",
        categoryUrl: "online-platforms.html"
    },
    {
        name: "Sixteen Rivers Press",
        url: "https://www.sixteenriverspress.org",
        category: "Online Platforms",
        categoryUrl: "online-platforms.html"
    },
    {
        name: "Science Fiction & Fantasy Poetry Association",
        url: "https://www.sfpoetry.org",
        category: "Online Platforms",
        categoryUrl: "online-platforms.html"
    },
    {
        name: "Puroslam",
        url: "https://www.puroslam.org",
        category: "Online Platforms",
        categoryUrl: "online-platforms.html"
    },
    {
        name: "Poetry Therapy International",
        url: "https://poetrytherapy.org",
        category: "Online Platforms",
        categoryUrl: "online-platforms.html"
    },
    {
        name: "The Rumpus",
        url: "https://therumpus.net",
        category: "Online Platforms",
        categoryUrl: "online-platforms.html"
    },
    {
        name: "Sixth Finch",
        url: "https://www.pw.org/directory",
        category: "Online Platforms",
        categoryUrl: "online-platforms.html"
    },

    // ADDITIONAL ORGANIZATIONS (29)
    {
        name: "American Academy of Arts and Letters",
        url: "https://www.americanacademy.org",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    },
    {
        name: "Arte Publico Press",
        url: "https://artepublicopress.uh.edu",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    },
    {
        name: "Favorite Poem Project",
        url: "https://www.favoritepoem.org",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    },
    {
        name: "Furious Flower Poetry Center",
        url: "https://www.furious-flower.org",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    },
    {
        name: "National Poetry Foundation",
        url: "https://www.uiowa.edu/~npoetry",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    },
    {
        name: "PEN American Center",
        url: "https://pen.org",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    },
    {
        name: "The Poetry Archive",
        url: "https://www.poetryarchive.org",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    },
    {
        name: "Small Publishers Association of North America",
        url: "https://www.spannet.org",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    },
    {
        name: "Scottish Book Trust",
        url: "https://www.scottishbooktrust.com",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    },
    {
        name: "The Braag CIC",
        url: "https://poets.org",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    },
    {
        name: "Southbank Centre Library (UK)",
        url: "https://www.southbankcentre.org.uk",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    },
    {
        name: "Shearsman/Shearsman Books",
        url: "https://www.shearsman.com",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    },
    {
        name: "The Gallery Press (Irish)",
        url: "https://www.pw.org/directory",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    },
    {
        name: "Green Bottle Press (UK)",
        url: "https://www.pw.org/directory",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    },
    {
        name: "Broken Sleep Books (UK)",
        url: "https://www.clmp.org",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    },
    {
        name: "Sidekick Books (UK)",
        url: "https://www.clmp.org",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    },
    {
        name: "CB editions (UK)",
        url: "https://www.clmp.org",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    },
    {
        name: "Blueprint Poetry (UK/International)",
        url: "https://www.pw.org/directory",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    },
    {
        name: "Out-Spoken Press (UK)",
        url: "https://www.pw.org/directory",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    },
    {
        name: "Pindrop Press (UK)",
        url: "https://www.pw.org/directory",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    },
    {
        name: "Apogee Press",
        url: "https://poets.org/listing/apogee-press",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    },
    {
        name: "Sea Crow Press",
        url: "https://www.pw.org/directory",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    },
    {
        name: "Serving House Books",
        url: "https://www.pw.org/directory",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    },
    {
        name: "The Federal Poets",
        url: "https://www.blehert.com/TheFederalPoets/poetindex.html",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    },
    {
        name: "Chiricu (Chiricú Journal: Latina/o Literatures, Arts, and Cultures)",
        url: "https://scholarworks.iu.edu/iupjournals/index.php/chiricu",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    },
    {
        name: "The Constant Critic",
        url: "https://fencedigital.com/fence-digital/constant-critic/",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    },
    {
        name: "Vegetarian Alcoholic Press",
        url: "https://www.pw.org/directory",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    },
    {
        name: "Woodhall Press",
        url: "https://www.pw.org/directory",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    },
    {
        name: "Apogee Press (duplicate listing)",
        url: "https://poets.org/listing/apogee-press",
        category: "Additional Resources",
        categoryUrl: "additional-organizations.html"
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = organizations;
}
