# Section Template

```js
{/* 
  Reusable Section Template 
  - `columns` prop on Grid defaults to 2.
  - `icon` names come from the icon library (e.g. starlight icons or custom).
*/}
<Section title="Section Title" description="Optional description goes here">
  <Grid columns={2}>
    <Card icon="star" title="Card Title">
      Card content goes here. You can use **markdown** inside.
    </Card>
    <Card icon="pencil" title="Another Card">
      More content.
    </Card>
    <Card icon="laptop" title="Third Card">
      Even more content.
    </Card>
    <Card icon="setting" title="Fourth Card">
      Final card content.
    </Card>
  </Grid>
</Section>
```
