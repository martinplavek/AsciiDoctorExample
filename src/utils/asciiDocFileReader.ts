import Processor from "asciidoctor";
import asciidoctorHtml5s from "asciidoctor-html5s";

const aDoc = '== Hello, AsciiDoc! \n This is an interactive editor. \n Use it to try https://asciidoc.org[AsciiDoc].'


export function readAsciiDocFile()  {
    const processor = Processor();

    console.log('aDoc', aDoc)
    asciidoctorHtml5s.register();

    return processor.convert(aDoc, {standalone: false, backend: 'html5s'});
}