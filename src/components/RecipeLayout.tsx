import "./RecipeLayout.css";

function RecipeLayout() {
  return (
    <section className="recipe-layout">
      <aside className="ingredients-card">
        <h2>Mochi Ingredients</h2>

        <ul>
          <li>1 cup mochiko rice flour</li>
          <li>1/4 cup sugar</li>
          <li>3/4 cup milk</li>
          <li>1 drop red food coloring</li>
          <li>1.5 tbsp butter</li>
        </ul>

        <h2>Filling Ingredients</h2>

        <ul>
          <li>1 cup heavy cream</li>
          <li>1 tbsp sugar</li>
          <li>1 tbsp vanilla extract</li>
          <li>45 diced strawberries</li>
        </ul>

        <h2>Optional Ingredients</h2>

        <ul>
          <li>Candy melts</li>
        </ul>
      </aside>

      <div className="middle-column" aria-hidden="true"></div>

      <section className="procedure-card">
        <h2>Recepy</h2>

        <ol>
          <li>
            With a hand mixer, prepare filling by whipping heavy cream, sugar,
            and vanilla extract in a mixing bowl. Refrigerate until ready.
          </li>
          <li>Mix rice flour and sugar together in a bowl.</li>
          <li>
            Add in milk while whisking the mixture until it reaches a
            yogurt-like consistency.
          </li>
          <li>
            Cover with plastic wrap and poke holes to vent. Microwave for 3
            minutes in 1 minute increments.
          </li>
          <li>
            Let it cool down long enough to knead by hand. Knead and stretch the
            mochi until smooth.
          </li>
          <li>
            Add flour to the surface to avoid sticking. Divide dough into
            pieces.
          </li>
          <li>
            Use a roller to flatten mochi. Add cream filling and strawberry
            pieces, then pinch closed.
          </li>
          <li>Decorate with candy melts into Kirby faces.</li>
        </ol>
      </section>
    </section>
  );
}

export default RecipeLayout;
