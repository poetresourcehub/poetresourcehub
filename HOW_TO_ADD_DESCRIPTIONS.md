# How to Add Descriptions to Organizations

Your website is now set up to display descriptions for organizations. Here's how to add them:

## Step 1: Open the Data File

Open `organizations-data.js` in your text editor.

## Step 2: Add Description Field

For each organization, add a `description` field after the `url` field. Here's the format:

### Before (without description):
```javascript
{
    name: "Academy of American Poets",
    url: "https://poets.org",
    category: "Major Organizations",
    categoryUrl: "major-organizations.html"
},
```

### After (with description):
```javascript
{
    name: "Academy of American Poets",
    url: "https://poets.org",
    description: "National organization championing poets and poetry through programs, publications, and advocacy",
    category: "Major Organizations",
    categoryUrl: "major-organizations.html"
},
```

## Step 3: Writing Good Descriptions

**Guidelines:**
- Keep it 1-2 sentences (100-150 characters is ideal)
- Explain what the organization does
- Include their specialty or focus if relevant
- Be clear and professional

**Examples:**

For a **Literary Magazine**:
```javascript
description: "Quarterly journal publishing contemporary poetry, fiction, and essays"
```

For a **Publisher**:
```javascript
description: "Independent press specializing in debut poetry collections"
```

For a **MFA Program**:
```javascript
description: "Fully-funded MFA program in poetry and fiction at [University Name]"
```

For a **State Poetry Society**:
```javascript
description: "Supporting poets in [State] through workshops, readings, and annual contests"
```

For an **Award**:
```javascript
description: "Annual prize for debut poetry collections by emerging writers"
```

## Step 4: Finding Descriptions

Visit each organization's website and look for:
- Their "About" page
- Mission statement
- Homepage tagline or introduction
- "What We Do" section

## Step 5: Test Your Changes

1. Save `organizations-data.js`
2. Refresh your website in the browser
3. Check that descriptions appear below organization names
4. Descriptions should be in gray text between the name and URL

## Notes

- Descriptions are **optional** - organizations without descriptions will still display normally
- You can add descriptions gradually over time
- Already added descriptions for the first 3 major organizations as examples
- Keep descriptions consistent in tone and length across all organizations

## Example: Complete Organization Entry

```javascript
{
    name: "Poetry Foundation",
    url: "https://www.poetryfoundation.org",
    description: "Independent foundation supporting poetry through Poetry Magazine, grants, and educational programs",
    category: "Major Organizations",
    categoryUrl: "major-organizations.html"
},
```

That's it! Add descriptions at your own pace. The website will automatically display them as you add them.
