import React, { Component } from 'react';
import './Goodreads.css'

const goodreadsWidget = (
<div>
      <div id="gr_custom_widget_1551576644">
          <div class="gr_custom_container_1551576644">
    <h2 class="gr_custom_header_1551576644">
    <a style={{'text-decoration': 'none'}} rel="nofollow" href="https://www.goodreads.com/review/list/94308288-parker-illig?shelf=currently-reading&amp;utm_medium=api&amp;utm_source=custom_widget">Currently Reading</a>
    </h2>
      <div class="gr_custom_each_container_1551576644">
          <div class="gr_custom_book_container_1551576644">
            <a title="Guns, Germs, and Steel: The Fates of Human Societies" rel="nofollow" href="https://www.goodreads.com/review/show/2735980877?utm_medium=api&amp;utm_source=custom_widget"><img alt="Guns, Germs, and Steel: The Fates of Human Societies" border="0" src="https://images.gr-assets.com/books/1488455013m/34447296.jpg" /></a>
          </div>
          <div class="gr_custom_title_1551576644">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/2735980877?utm_medium=api&amp;utm_source=custom_widget">Guns, Germs, and Steel: The Fates of Human Societies</a>
          </div>
          <div class="gr_custom_author_1551576644">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/256.Jared_Diamond">Jared Diamond</a>
          </div>
      </div>
      <div class="gr_custom_each_container_1551576644">
          <div class="gr_custom_book_container_1551576644">
            <a title="The Brothers Karamazov" rel="nofollow" href="https://www.goodreads.com/review/show/2735981609?utm_medium=api&amp;utm_source=custom_widget"><img alt="The Brothers Karamazov" border="0" src="https://images.gr-assets.com/books/1427728126m/4934.jpg" /></a>
          </div>
          <div class="gr_custom_title_1551576644">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/2735981609?utm_medium=api&amp;utm_source=custom_widget">The Brothers Karamazov</a>
          </div>
          <div class="gr_custom_author_1551576644">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/3137322.Fyodor_Dostoyevsky">Fyodor Dostoyevsky</a>
          </div>
      </div>
      <div class="gr_custom_each_container_1551576644">
          <div class="gr_custom_book_container_1551576644">
            <a title="Blood Meridian, or the Evening Redness in the West" rel="nofollow" href="https://www.goodreads.com/review/show/2735984863?utm_medium=api&amp;utm_source=custom_widget"><img alt="Blood Meridian, or the Evening Redness in the West" border="0" src="https://images.gr-assets.com/books/1453995760m/394535.jpg" /></a>
          </div>
          <div class="gr_custom_title_1551576644">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/2735984863?utm_medium=api&amp;utm_source=custom_widget">Blood Meridian, or the Evening Redness in the West</a>
          </div>
          <div class="gr_custom_author_1551576644">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/4178.Cormac_McCarthy">Cormac McCarthy</a>
          </div>
      </div>
      <div class="gr_custom_each_container_1551576644">
          <div class="gr_custom_book_container_1551576644">
            <a title="The Lord of the Rings (The Lord of the Rings, #1-3)" rel="nofollow" href="https://www.goodreads.com/review/show/2735988118?utm_medium=api&amp;utm_source=custom_widget"><img alt="The Lord of the Rings" border="0" src="https://images.gr-assets.com/books/1363248420m/54707.jpg" /></a>
          </div>
          <div class="gr_custom_title_1551576644">
            <a rel="nofollow" href="https://www.goodreads.com/review/show/2735988118?utm_medium=api&amp;utm_source=custom_widget">The Lord of the Rings</a>
          </div>
          <div class="gr_custom_author_1551576644">
            by <a rel="nofollow" href="https://www.goodreads.com/author/show/656983.J_R_R_Tolkien">J.R.R. Tolkien</a>
          </div>
      </div>
  <br style={{clear: 'both'}}/>
  <center>
    <a rel="nofollow" href="https://www.goodreads.com/"><img alt="goodreads.com" style={{border:0}} src="https://www.goodreads.com/images/widget/widget_logo.gif" /></a>
  </center>
  <noscript>
    Share <a rel="nofollow" href="https://www.goodreads.com/">book reviews</a> and ratings with Parker, and even join a <a rel="nofollow" href="https://www.goodreads.com/group">book club</a> on Goodreads.
  </noscript>
  </div>

      </div>
      <script src="https://www.goodreads.com/review/custom_widget/94308288.Currently%20Reading?cover_position=left&cover_size=medium&num_books=5&order=a&shelf=currently-reading&show_author=1&show_cover=1&show_rating=1&show_review=0&show_tags=0&show_title=1&sort=date_added&widget_bg_color=FFFFFF&widget_bg_transparent=&widget_border_width=1&widget_id=1551576644&widget_text_color=000000&widget_title_size=medium&widget_width=medium" type="text/javascript" charset="utf-8"></script>
</div>
)

export class GoodreadsComponent extends Component {
    render() {
        return (<div class='goodreads'>{goodreadsWidget}</div>)
    }
}