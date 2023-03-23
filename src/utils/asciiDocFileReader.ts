import Processor from "asciidoctor";
import asciidoctorHtml5s from "asciidoctor-html5s";

const aDoc = "== Hello, AsciiDoc!\nThis is an interactive editor. \n Use it to try https://asciidoc.org[AsciiDoc]. \n link:aDocNext[Next]"
const aDocNext = "== Hello, AsciiDoc next!\nThis is an interactive editor. \n Use it to try https://asciidoc.org[AsciiDoc]. \n link:aDoc[Previous]"

export function readAsciiDocFile()  {
    const processor = Processor();
    asciidoctorHtml5s.register();

    return processor.convert(aDoc, {backend: 'html5s', safe: 'unsafe'});
}

export function readAsciiDocFileNext()  {
    const processor = Processor();
    asciidoctorHtml5s.register();

    return processor.convert(aDocNext, {backend: 'html5s', safe: 'unsafe'});
}