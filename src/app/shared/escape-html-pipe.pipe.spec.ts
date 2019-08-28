import { EscapeHtmlPipe } from './escape-html-pipe.pipe';
import { DomSanitizer } from '@angular/platform-browser';

describe('EscapeHtmlPipe', () => {
  it('create an instance', () => {
    //let ds = new DomSanitizer();
    const pipe = new EscapeHtmlPipe(null);
    expect(pipe).toBeTruthy();
  });
});
