if (document.URL.includes('ws/eol/aluno/documentos/historicoescolar/') && document.URL.includes('html')) {

    document.getElementsByTagName('body')[0].innerHTML = `

        <style>
        #cantoPagina {
            display: flex;
            flex-direction: row;
            position: fixed;
            z-index: 2;
            width: 100%;
            justify-content: end;
            align-items: start;
        }
        </style>

        <div id="cantoPagina">

        <select name="opcaoHistorico" id="selectOptions" style="">

            <option value="">TIPO DE HISTÓRICO EDITOR</option>
            <option value="historicoRegularEJA" id="historicoRegularEJA">HISTÓRICO REGURAR/EJA</option>

        </select>


        </div>

    ` + document.getElementsByTagName('body')[0].innerHTML

    document.getElementById('selectOptions').addEventListener('input', () => {

        removeStyles()
        criaBody()




    })

    function removeStyles() {

        let styles = document.getElementsByTagName('style')
        let links = document.getElementsByTagName('link')

        for (sty of styles) {

            sty.remove()

        }

        for (lin of links) {

            lin.remove()

        }



    }

    function criaBody() {



        let novoBody = document.createElement('body')
        let htmlDoc = document.getElementsByTagName('html')[0]

        novoBody.innerHTML = `

        <style>
        * {
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-size: 10px;
        }

        body {
            heigth: 1200px;
            width: 100%;
        }

        .corpoPagina {

            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;

        }

        .historicoAlunoCompletar {

            border: 1px black !important;
            border-collapse: collapse;
            width: 100%;
            height: 100%;
            margin: 0px;


        }

        .cabecalhoAno {
            height: 50px;

        }

        td {

            min-width: 30px;
            height: 16px;

        }

        td.campoInativo {
            background-color: #cfcfcf;

        }

        .verticalCentro .rotate {
            display: block;
            transform: rotate(-90deg);
            width: 250px;
            margin-left: -113px;
            text-align: center;
            font-size: 12px;
        }

        .verticalEsquerda .rotate {
            display: flex;
            align-content: start;
            transform: rotate(-90deg);
            width: 600px;
            margin-left: -265px;
            margin-top: 80px;
            text-align: start;
            font-size: 12px;
            align-content: space-around;
        }

        td.verticalCentro {

            max-width: 25px;

        }

        td.verticalEsquerda {

            max-width: 65px;

        }

        .tableParcial {

            width: 80%;
            border: 1px black;
            border-collapse: collapse;
            text-align: center;

        }

        .divPadrao {
            width: 100%;
            border: black 1px solid;
            border-collapse: collapse;
            margin: 10px 0px 10px 0px;
            padding: 5px 0px 5px 0px;
            text-align: center;

        }

        .tittleDiv {

            font-size: 18px;
            width: 100%;
            text-align: center;

        }

        #divDados {

            font-size: 15px;
            text-align: start;


        }

        span,
        strong {

            font-size: 10px;

        }

        .divPreencher {
            display: inline-block;
            width: 75px;
            border: black 1px solid;
            text-align: center;
            font-size: 15px;

        }

        .cargaHorariaEditavel {

            width: 65px;
        }

        </style>

            <div class="corpoPagina">

            <img src="pngwing.com.png" alt="" style="width: 150px; height: 150px;">

            <div class="divPadrao">
                <div class="tittleDiv">ESCOLA JOAQUIM EUGÊNIO SILVA</div>
            </div>

            <div class="divPadrao">
                <div class="tittleDiv">Rua Fernando Bezerra, s/n° - Centro</div>
            </div>

            <div class="divPadrao">
                <div class="tittleDiv">56260-000 - Ipubi - Pernambuco</div>
            </div>

            <div class="divPadrao">
                <div class="tittleDiv">Portaria de Aut. de Funcionamento n° 8.412 D. O. de 26/01/1983 Cadastro Escolar n°. E
                    - 754.003</div>
            </div>

            <div class="divPadrao" id="divCertificado">

                <div class="tittleDiv">CERTIFICADO E HISTÓRICO ESCOLAR DO ENSINO MÉDIO </div><br><br>

                <div style="margin: 5px; font-size: 15px;">

                    Pelo presente HISTÓRICO ESCOLAR certificamos que: <span><input type="text" id="nomeAluno"></span>
                    Filho(a) de:
                    <span><input type="text" id="nomeFiliacao1"></span> e de <span><input type="text"
                            id="nomeFiliacao2"></span> Nascido em: <span><input type="text" id="diaNascimentoAluno"></span>
                    de <span><input type="text" id="mesNascimentoAluno"></span> de <span><input type="text"
                            id="anoNascimentoAluno"></span>. Cidade de <span><input type="text"
                            id="naturalidadeCidadeAluno"></span> UF: <span><input type="text"
                            id="naturalidadeUFAluno"></span> Nacionalidade: <span><input type="text"
                            id="nacionalidadeAluno"></span> RG: <span><input type="text" id="RGaluno"></span> Órgão
                    Expedidor: <span><input type="text" id="expRGAluno"></span> Concluiu o <span><input type="text"
                            id="anoConclusaoAluno"></span> do <span><input type="text" id="modalidadeCursoAluno"></span>,
                    nos termos da Lei 9.394/96 de 20 de Dezembro de 1996,
                    Titulo V, capitulo II, seção III

                </div>

            </div>

            <div class="divPadrao" id="divInformacoesComplementares">

                <div class="tittleDiv">INFORMAÇÕES COMPLEMENTARES </div><br><br>

                <div style="margin: 5px; font-size: 15px; text-align: start;">

                    1. Forma de acesso: <br>
                    CLASSIFICAÇÃO: Base Legal - Lei Federal 9.394/96, artigo 24, inciso II, alinea <br><br>

                    <div style="display: flex;">

                        <div style="font-size: 15px; text-align: start; width: 60%;">
                            2. Modalidade de Ensino: Educação de Jovens e Adultos <br><br>
                            3. Ciclo de Aceleração: <br><br>
                            4. Progressão Parcial: <br><br>
                            5. O minimo exigido para promoção é <strong style="font-size: 16px;">6,0</strong> e 75% de
                            freqüência do total de horas letivas. <br><br>
                            6. Dispensa de Ensino Religioso: <br><br>
                            7. Dispensa de Educação Fisica ( Base Legal: Lei Federal 10.793/2003 - art. 1°): <br>


                        </div>

                        <div style="font-size: 15px; width: 40%">


                            <span id="modalidadeEJA"><input type="radio" name="modalidadeEJA" value-mostrar="SIM"> SIM
                                <input type="radio" name="modalidadeEJA" value-mostrar="NÃO" checked> NÃO</span> <br><br>
                            <span id="cicloAceleracao"><input type="radio" name="cicloAceleracao" value-mostrar="SIM"> SIM
                                <input type="radio" name="cicloAceleracao" value-mostrar="NÃO" checked> NÃO</span> <br><br>
                            <span id="progressaoParcial"><input type="radio" name="progressaoParcial" value-mostrar="SIM">
                                SIM <input type="radio" name="progressaoParcial" value-mostrar="NÃO" checked></span> <span
                                id="numDisciplinasParcial">NÃO N° de Disciplinas <input style="width: 50px;" type="number"
                                    name="numDisciplinasParcial"></span> <br><br><br><br>
                            <span id="dispensaER"><input type="radio" name="dispensaER" value-mostrar="SIM"> SIM <input
                                    type="radio" name="dispensaER" value-mostrar="NÃO" checked> NÃO</span> <br><br>
                            <span id="dispensaEdFis"><input type="radio" name="dispensaEdFis" value-mostrar="SIM"> SIM
                                <input type="radio" name="dispensaEdFis" value-mostrar="NÃO" checked> NÃO</span> <br>


                        </div>


                    </div>
                </div>
            </div>

            <div class="divPadrao">

                <div style="padding: 5px; display: flex; ">

                    <div style="width: 70%; text-align: justify; font-size: 15px; padding: 4px">

                        Observações: <br>
                        <input type="text" style="width: 95%; height: 80%;">

                    </div>

                    <div
                        style="width: 30%; color: red; font-size: 15px;text-align: justify; border: black 1px solid;padding: 4px;">

                        A portaria SEDUC n° 5693 de
                        11/11/2004, revoga a instrução n°
                        03/2003, dispensando o visto de
                        autenticidade e de reconhecimento de
                        assinatura nos documentos escolares
                        pela GRE. ____/____/________ <br>
                        ________________________ <br>
                        Mat


                    </div>


                </div>




            </div>



            <table class="historicoAlunoCompletar" border>

                <tr>
                    <th rowspan="3" colspan="2">DISCIPLINAS</th>
                    <th colspan="4" class="cabecalhoAno">1° Ano</th>
                    <th colspan="4" class="cabecalhoAno">2° Ano</th>
                    <th colspan="4" class="cabecalhoAno">3° Ano</th>
                    <th rowspan="3">C. H TOTAL</th>
                </tr>

                <tr>
                    <th colspan="4" id="primeiroAno"></th>
                    <th colspan="4" id="segundoAno"></th>
                    <th colspan="4" id="terceiroAno"></th>
                </tr>

                <tr>

                    <td class="campoInativo"></td>
                    <th>CH</th>
                    <th>Notas</th>
                    <td class="verticalEsquerda" rowspan="44">

                        <div>
                            <div class="rotate">

                                <div style="display: flex; column-gap: 20px;">

                                    <div>

                                        <strong>Estabelecimento:</strong> <span> <input type="text"
                                                id="estabelecimentoAno1"></span> <br>
                                        <strong>Cidade:</strong> <span><input type="text" id="cidadeAno1"></span> <br>
                                        <strong>U.F:</strong> <span><input type="text" id="UFAno1"></span>

                                    </div>


                                    <div style="display: flex; column-gap: 5px;">

                                        <strong>Resultado:</strong>

                                        <div>

                                            Progressão Plena ( <strong> <span><input type="radio" name="resultadoAno1"
                                                        id="resultadoAno1Plena"></span></strong> ) <br>
                                            Progressão Parcial ( <strong> <span><input type="radio" name="resultadoAno1"
                                                        id="resultadoAno1Parcial"></span> </strong> ) <br>
                                            Reprovado ( <strong> <span><input type="radio" name="resultadoAno1"
                                                        id="resultadoAno1Reprovado"></span></strong> ) <br>


                                        </div>



                                    </div>


                                </div>

                            </div>

                        </div>


                    </td>

                    <td class="campoInativo"></td>
                    <th>CH</th>
                    <th>Notas</th>
                    <td class="verticalEsquerda" rowspan="44">

                        <div>
                            <div class="rotate">

                                <div style="display: flex; column-gap: 20px;">

                                    <div>

                                        <strong>Estabelecimento:</strong> <span> <input type="text"
                                                id="estabelecimentoAno2"></span> <br>
                                        <strong>Cidade:</strong> <span><input type="text" id="cidadeAno2"></span> <br>
                                        <strong>U.F:</strong> <span><input type="text" id="UFAno2"></span>

                                    </div>


                                    <div style="display: flex; column-gap: 5px;">

                                        <strong>Resultado:</strong>

                                        <div>

                                            Progressão Plena ( <strong> <span><input type="radio" name="resultadoAno2"
                                                        id="resultadoAno2Plena"></span> </strong> ) <br>
                                            Progressão Parcial ( <strong><span> <input type="radio" name="resultadoAno2"
                                                        id="resultadoAno2Parcial"></span></strong> ) <br>
                                            Reprovado ( <strong> <span><input type="radio" name="resultadoAno2"
                                                        id="resultadoAno2Reprovado"></span< /strong> ) <br>


                                        </div>



                                    </div>


                                </div>

                            </div>

                        </div>


                    </td>

                    <td class="campoInativo"></td>
                    <th>CH</th>
                    <th>Notas</th>
                    <td class="verticalEsquerda" rowspan="44">

                        <div>
                            <div class="rotate">

                                <div style="display: flex; column-gap: 20px;">

                                    <div>

                                        <strong>Estabelecimento:</strong> <span> <input type="text"
                                                id="estabelecimentoAno3"></span> <br>
                                        <strong>Cidade:</strong> <span><input type="text" id="cidadeAno3"></span> <br>
                                        <strong>U.F:</strong> <span><input type="text" id="UFAno3"></span>

                                    </div>


                                    <div style="display: flex; column-gap: 5px;">

                                        <strong>Resultado:</strong>

                                        <div>

                                            Progressão Plena ( <strong><span><input type="radio" name="resultadoAno3"
                                                        id="resultadoAno3Plena"></span></strong> ) <br>
                                            Progressão Parcial ( <strong><span><input type="radio" name="resultadoAno3"
                                                        id="resultadoAno3Parcial"></span></strong> ) <br>
                                            Reprovado ( <strong><span><input type="radio" name="resultadoAno3"
                                                        id="resultadoAno3Reprovado"></span></strong> ) <br>


                                        </div>



                                    </div>


                                </div>

                            </div>

                        </div>


                    </td>

                </tr>

                <tr>
                    <td class="verticalCentro" rowspan="13">
                        <div> <strong class="rotate">BASE CURRICULAR COMUM</strong></div>
                    </td>
                    <td class="nomeDisciplina" nameNativo="Arte">Arte</td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina" nameNativo="Biologia">Biologia</td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina" nameNativo="Educação Física">Educação Física</td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina" nameNativo="Filosofia">Filosofia</td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina" nameNativo="Física">Física</td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina" nameNativo="Geografia">Geografia</td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina" nameNativo="História">História</td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina" nameNativo="Língua Portuguesa">Língua Portuguesa</td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina" nameNativo="Matemática">Matemática</td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina" nameNativo="Química">Química</td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina" nameNativo="Sociologia">Sociologia</td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina"></td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina"></td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>

                    <td class="verticalCentro" rowspan="9">
                        <div>
                            <strong class="rotate">
                                PARTE DIVERSIFICADA
                            </strong>
                        </div>
                    </td>
                    <td class="nomeDisciplina" nameNativo="Língua Estrangeira">Líng. Estrangeira Moderna - INGLÊS</td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina"></td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina"></td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina"></td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina"></td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina"></td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina"></td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina"></td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina"></td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="verticalCentro" rowspan="16">
                        <div>
                            <strong class="rotate">
                                ATIVIDADE COMPLEMENTAR
                            </strong>
                        </div>
                    </td>
                    <td class="nomeDisciplina"></td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina"></td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina"></td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina"></td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina"></td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina"></td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina"></td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina"></td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina"></td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina"></td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina"></td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina"></td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina"></td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina"></td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina"></td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina"></td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="verticalCentro" rowspan="6"></td>
                    <td class="nomeDisciplina"></td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td class="nomeDisciplina"></td>
                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>

                    <td class="campoInativo"></td>
                    <td class="ch"></td>
                    <td class="nota"></td>
                    <td class="chTotal"></td>
                </tr>

                <tr>
                    <td id="cargaHorariaTotal"><strong>CARGA HORÁRIA TOTAL</strong></td>
                    <td colspan="3"><input id="cargaHorariaTotalAno1" type="text" class="cargaHorariaEditavel"></td>

                    <td colspan="3"><input type="text" id="cargaHorariaTotalAno2" class="cargaHorariaEditavel"></td>

                    <td colspan="3"><input type="text" id="cargaHorariaTotalAno3" class="cargaHorariaEditavel"></td>
                    <th rowspan="3">CH HORÁRIA TOTAL</th>
                </tr>

                <tr>
                    <td class="nomeDisciplina" id="cargaHorariaTotalHorasLetivas"><strong>CARGA HORÁRIA EM HORAS
                            LETIVAS</strong></td>
                    <td colspan="3"><input type="text" id="cargaHorariaTotalHorasLetivasAno1" class="cargaHorariaEditavel">
                    </td>

                    <td colspan="3"><input type="text" id="cargaHorariaTotalHorasLetivasAno2" class="cargaHorariaEditavel">
                    </td>

                    <td colspan="3"><input type="text" id="cargaHorariaTotalHorasLetivasAno3" class="cargaHorariaEditavel">
                    </td>
                </tr>

                <tr>
                    <td class="nomeDisciplina" id="percentualFrequenciaAluno"><strong>PERCENTUAL DE FREQUÊNCIA DO
                            ALUNO</strong></td>
                    <td colspan="3"><input type="text" id="percentualFrequenciaAlunoAno1" class="cargaHorariaEditavel"></td>

                    <td colspan="3"><input type="text" id="percentualFrequenciaAlunoAno2" class="cargaHorariaEditavel"></td>

                    <td colspan="3"><input type="text" id="percentualFrequenciaAlunoAno3" class="cargaHorariaEditavel"></td>
                </tr>


            </table>

            <br>

            <table class="tableParcial" border="">

                <tr>
                    <td colspan="6">REGISTRO DE PROGRESSÃO PARCIAL E EXAME ESPECIAL</td>
                </tr>
                <tr>
                    <td>Ano</td>
                    <td>Série</td>
                    <td>Disciplina</td>
                    <td>Nota</td>
                    <td>Resultado</td>
                    <td>Unidade de Ensino</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

            </table>





        </div>

        <script type="text/javascript">
    	window.resizeTo(741, screen.height - 100);
		</script>
        
        `

        htmlDoc.appendChild(novoBody)
        document.getElementsByTagName('body')[0].hidden = true;
        scriptsPrencher()



    }

    function scriptsPrencher() {


        function retornaCamposTabelaPreencher(tabelaHistorico) {

            let notasPrimario = tabelaHistorico.querySelectorAll('td')

            let notasFiltrado = []

            let jsonDisciplinas = {}
            let disciplinaAtual
            let numCampo

            for (td of notasPrimario) {

                if (!td.classList.contains('verticalCentro') && !td.classList.contains('verticalEsquerda') && !td.classList.contains('campoInativo')) {

                    notasFiltrado.push(td)
                    // td.style.background = "#3c7cff"
                    // td.style.color = "white"

                    if (td.classList.contains('nomeDisciplina')) {

                        let nomeDisciplina = td.getAttribute('nameNativo')

                        jsonDisciplinas[nomeDisciplina] = {}

                        disciplinaAtual = nomeDisciplina



                        numCampo = 0

                    } else {

                        let tipoCampo

                        if (td.classList.contains('nota')) {

                            tipoCampo = 'nota'
                        } else if (td.classList.contains('chTotal')) {

                            tipoCampo = 'chTotal'
                            numCampo = 0
                        }
                        else if (td.classList.contains('ch')) {
                            tipoCampo = 'ch'
                            numCampo++
                        }

                        jsonDisciplinas[disciplinaAtual][tipoCampo + numCampo] = td


                    }




                }


            }

            console.log(jsonDisciplinas)

            return jsonDisciplinas


        }

        function retornaCamposTabelaPreenchida(tabelaHistorico) {

            let notasPrimario = tabelaHistorico.querySelectorAll('td')

            let notasFiltrado = []

            let jsonDisciplinas = {}
            let disciplinaAtual
            let numCampo

            for (td of notasPrimario) {

                if (!td.classList.contains('verticalCentro') && !td.classList.contains('verticalEsquerda')) {

                    notasFiltrado.push(td)
                    td.style.background = "#ff6468"
                    td.style.color = "white"

                    if (td.classList.contains('componenteMedio')) {

                        let nomeDisciplina = td.innerText

                        jsonDisciplinas[nomeDisciplina] = {}

                        disciplinaAtual = nomeDisciplina

                        numCampo = 0

                    } else {

                        let tipoCampo


                        if (td.innerText.includes(',')) {

                            tipoCampo = 'nota'
                            numCampo++
                        } else if (jsonDisciplinas[disciplinaAtual]['ch3']) {

                            tipoCampo = 'chTotal'
                            numCampo = 0
                        }
                        else if (td.innerText.includes('-') && !jsonDisciplinas[disciplinaAtual]['nota3']) {

                            tipoCampo = 'nota'
                            numCampo++
                        } else if (td.innerText.includes('-') && !jsonDisciplinas[disciplinaAtual]['ch3']) {

                            tipoCampo = 'ch'

                        } else {

                            tipoCampo = 'ch'

                        }

                        jsonDisciplinas[disciplinaAtual][tipoCampo + numCampo] = td.innerText



                    }




                }


            }

            // console.log(notasFiltrado)
            console.log(jsonDisciplinas)

            return jsonDisciplinas


        }

        function preencheDadosTabelaHistoricoMedio() {

            let tabelaPreencher = retornaCamposTabelaPreencher(document.querySelectorAll('.historicoAlunoCompletar')[0])
            let tabelaPreenchida = retornaCamposTabelaPreenchida(document.querySelectorAll('.tabelaHistoricoMedio')[0])

            for (linha in tabelaPreencher) {

                if (tabelaPreenchida[linha]) {

                    for (campo in tabelaPreenchida[linha]) {

                        console.log(linha, campo)
                        console.log(tabelaPreencher[linha][campo])

                        tabelaPreencher[linha][campo].innerText = tabelaPreenchida[linha][campo]


                    }

                }
            }


        }

        function preencheAnos() {

            let tableHeaders = document.querySelectorAll('.tabelaHistoricoMedio')[0].querySelectorAll('th span')
            let tableHeadersCompletar = document.querySelectorAll('.historicoAlunoCompletar')[0].querySelectorAll('th')

            tableHeadersCompletar[5].innerText = tableHeaders[1].innerText
            tableHeadersCompletar[6].innerText = tableHeaders[3].innerText
            tableHeadersCompletar[7].innerText = tableHeaders[5].innerText



        }

        function retornaCargaHorariaTotal() {

            let dadosCargaHoraria = {}

            let trsTabelaPreenchida = document.querySelectorAll('.tabelaHistoricoMedio tr')

            for (tr of trsTabelaPreenchida) {

                if (tr.querySelectorAll('td').length != 0) {

                    if (tr.querySelectorAll('td')[0].innerText == "Carga Horária Total") {


                        dadosCargaHoraria['cargaHorariaTotal'] = { "ano1": "", "ano2": "", "ano3": "" }

                        dadosCargaHoraria['cargaHorariaTotal'].ano1 = tr.querySelectorAll('td')[1].innerText
                        dadosCargaHoraria['cargaHorariaTotal'].ano2 = tr.querySelectorAll('td')[2].innerText
                        dadosCargaHoraria['cargaHorariaTotal'].ano3 = tr.querySelectorAll('td')[3].innerText

                        console.log(dadosCargaHoraria)





                    } else if (tr.querySelectorAll('td')[0].innerText == "Carga Horária em Horas Letivas ") {


                        dadosCargaHoraria['cargaHorariaTotalHorasLetivas'] = { "ano1": "", "ano2": "", "ano3": "" }

                        dadosCargaHoraria['cargaHorariaTotalHorasLetivas'].ano1 = tr.querySelectorAll('td')[1].innerText
                        dadosCargaHoraria['cargaHorariaTotalHorasLetivas'].ano2 = tr.querySelectorAll('td')[2].innerText
                        dadosCargaHoraria['cargaHorariaTotalHorasLetivas'].ano3 = tr.querySelectorAll('td')[3].innerText

                        console.log(dadosCargaHoraria)



                    } else if (tr.querySelectorAll('td')[0].innerText == "Percentual de Frequência do(a) Estudante") {


                        dadosCargaHoraria['percentualFrequenciaEstudante'] = { "ano1": "", "ano2": "", "ano3": "" }

                        dadosCargaHoraria['percentualFrequenciaEstudante'].ano1 = tr.querySelectorAll('td')[1].innerText.replaceAll("	", "")
                        dadosCargaHoraria['percentualFrequenciaEstudante'].ano2 = tr.querySelectorAll('td')[2].innerText.replaceAll("	", "")
                        dadosCargaHoraria['percentualFrequenciaEstudante'].ano3 = tr.querySelectorAll('td')[3].innerText.replaceAll("	", "")

                        console.log(dadosCargaHoraria)



                    }




                }



            }



            return dadosCargaHoraria

        }

        function preencheCargaHorariaTotal() {

            let dadosCargaHoraria = retornaCargaHorariaTotal()

            document.querySelector('#cargaHorariaTotalAno1').value = dadosCargaHoraria['cargaHorariaTotal'].ano1
            document.querySelector('#cargaHorariaTotalAno2').value = dadosCargaHoraria['cargaHorariaTotal'].ano2
            document.querySelector('#cargaHorariaTotalAno3').value = dadosCargaHoraria['cargaHorariaTotal'].ano3


            document.querySelector('#cargaHorariaTotalHorasLetivasAno1').value = dadosCargaHoraria['cargaHorariaTotalHorasLetivas'].ano1
            document.querySelector('#cargaHorariaTotalHorasLetivasAno2').value = dadosCargaHoraria['cargaHorariaTotalHorasLetivas'].ano2
            document.querySelector('#cargaHorariaTotalHorasLetivasAno3').value = dadosCargaHoraria['cargaHorariaTotalHorasLetivas'].ano3

            document.querySelector('#percentualFrequenciaAlunoAno1').value = dadosCargaHoraria['percentualFrequenciaEstudante'].ano1
            document.querySelector('#percentualFrequenciaAlunoAno2').value = dadosCargaHoraria['percentualFrequenciaEstudante'].ano2
            document.querySelector('#percentualFrequenciaAlunoAno3').value = dadosCargaHoraria['percentualFrequenciaEstudante'].ano3



        }

        function deferirCargaHorariaTotal() {

            let cargaHorariaEditavel = document.querySelectorAll('.cargaHorariaEditavel')

            for (input of cargaHorariaEditavel) {

                input.parentNode.innerText = input.value



            }

        }

        function preencherCertificado() {

            let certificadoHistoricoPreenchido = document.querySelectorAll('.textoCertificado span strong')
            let certificadoHistoricoPreencher = document.querySelectorAll('#divCertificado span > input')

            if(certificadoHistoricoPreenchido.length == 12){

                document.querySelector('#nomeAluno').value = certificadoHistoricoPreenchido[0].innerText
                document.querySelector('#nomeFiliacao1').value = certificadoHistoricoPreenchido[1].innerText
                document.querySelector('#nomeFiliacao2').value = certificadoHistoricoPreenchido[2].innerText
                document.querySelector('#diaNascimentoAluno').value = certificadoHistoricoPreenchido[3].innerText
                document.querySelector('#mesNascimentoAluno').value = certificadoHistoricoPreenchido[4].innerText
                document.querySelector('#anoNascimentoAluno').value = certificadoHistoricoPreenchido[5].innerText
                document.querySelector('#naturalidadeCidadeAluno').value = certificadoHistoricoPreenchido[6].innerText
                document.querySelector('#naturalidadeUFAluno').value = certificadoHistoricoPreenchido[7].innerText
                document.querySelector('#nacionalidadeAluno').value = certificadoHistoricoPreenchido[8].innerText
                // document.querySelector('#RGaluno').value = certificadoHistoricoPreenchido[9].innerText
                // document.querySelector('#expRGAluno').value = certificadoHistoricoPreenchido[10].innerText
                document.querySelector('#anoConclusaoAluno').value = certificadoHistoricoPreenchido[10].innerText
                document.querySelector('#modalidadeCursoAluno').value = certificadoHistoricoPreenchido[11].innerText
            
            
            } else if(certificadoHistoricoPreenchido.length == 11){

                document.querySelector('#nomeAluno').value = certificadoHistoricoPreenchido[0].innerText
                document.querySelector('#nomeFiliacao1').value = certificadoHistoricoPreenchido[1].innerText
                document.querySelector('#nomeFiliacao2').value = certificadoHistoricoPreenchido[2].innerText
                document.querySelector('#diaNascimentoAluno').value = certificadoHistoricoPreenchido[3].innerText
                document.querySelector('#mesNascimentoAluno').value = certificadoHistoricoPreenchido[4].innerText
                document.querySelector('#anoNascimentoAluno').value = certificadoHistoricoPreenchido[5].innerText
                document.querySelector('#naturalidadeCidadeAluno').value = certificadoHistoricoPreenchido[6].innerText
                document.querySelector('#naturalidadeUFAluno').value = certificadoHistoricoPreenchido[7].innerText
                document.querySelector('#nacionalidadeAluno').value = certificadoHistoricoPreenchido[8].innerText
                // document.querySelector('#RGaluno').value = certificadoHistoricoPreenchido[9].innerText
                // document.querySelector('#expRGAluno').value = certificadoHistoricoPreenchido[10].innerText
                document.querySelector('#anoConclusaoAluno').value = certificadoHistoricoPreenchido[9].innerText
                document.querySelector('#modalidadeCursoAluno').value = certificadoHistoricoPreenchido[10].innerText
            
            
            }



        }

        function deferirCertificado() {

            let certificadoHistoricoPreenchido = document.querySelectorAll('.textoCertificado span strong')
            let certificadoHistoricoPreencher = document.querySelectorAll('#divCertificado span > input')

            for (input of certificadoHistoricoPreencher) {

                if (input.value != "") {

                    input.parentNode.innerHTML = `<strong> ${input.value}</strong>`

                } else {

                    input.parentNode.innerHTML = `-`

                }

            }



        }

        function preencherVerticalEsquerda() {

            let verticalEstabelecimentoPreenchido = document.querySelectorAll('.verticalEstabelecimento span > span')
            let verticalResultadoPreenchido = document.querySelectorAll('.verticalResultado span > span')
            let verticalPreencher = document.querySelectorAll('.verticalEsquerda span > input')

            document.querySelector("#estabelecimentoAno1").value = verticalEstabelecimentoPreenchido[0].innerText
            document.querySelector("#cidadeAno1").value = verticalEstabelecimentoPreenchido[1].innerText
            document.querySelector("#UFAno1").value = verticalEstabelecimentoPreenchido[2].innerText


            switch (verticalResultadoPreenchido[0].innerText) {

                case "Progressão Plena": document.querySelector("#resultadoAno1Plena").checked = true
                    break
                case "Progressão Parcial": document.querySelector("#resultadoAno1Parcial").checked = true
                    break
                case "Reprovado": document.querySelector("#resultadoAno1Reprovado").checked = true
                    break


            }

            document.querySelector("#estabelecimentoAno2").value = verticalEstabelecimentoPreenchido[3].innerText
            document.querySelector("#cidadeAno2").value = verticalEstabelecimentoPreenchido[4].innerText
            document.querySelector("#UFAno2").value = verticalEstabelecimentoPreenchido[5].innerText


            switch (verticalResultadoPreenchido[1].innerText) {

                case "Progressão Plena": document.querySelector("#resultadoAno2Plena").checked = true
                    break
                case "Progressão Parcial": document.querySelector("#resultadoAno2Parcial").checked = true
                    break
                case "Reprovado": document.querySelector("#resultadoAno2Reprovado").checked = true
                    break


            }

            document.querySelector("#estabelecimentoAno3").value = verticalEstabelecimentoPreenchido[6].innerText
            document.querySelector("#cidadeAno3").value = verticalEstabelecimentoPreenchido[7].innerText
            document.querySelector("#UFAno3").value = verticalEstabelecimentoPreenchido[8].innerText


            switch (verticalResultadoPreenchido[2].innerText) {

                case "Progressão Plena": document.querySelector("#resultadoAno3Plena").checked = true
                    break
                case "Progressão Parcial": document.querySelector("#resultadoAno3Parcial").checked = true
                    break
                case "Reprovado": document.querySelector("#resultadoAno3Reprovado").checked = true
                    break


            }







        }

        function deferirVerticalEsquerda() {

            let verticalPreencher = document.querySelectorAll('.verticalEsquerda span > input')

            for (input of verticalPreencher) {

                if (input.type == "text") {

                    input.parentNode.innerText = input.value

                } else if (input.type == "radio") {

                    if (input.checked) {

                        input.parentNode.innerText = "x"

                    } else {

                        input.parentNode.innerText = ""

                    }


                }



            }




        }

        function deferirInformacoesComplementares() {

            let certificadoHistoricoPreencher = document.querySelectorAll('#divInformacoesComplementares span > input')

            for (input of certificadoHistoricoPreencher) {

                if (input.checked) {

                    input.parentNode.innerHTML = `<div class="divPreencher"> ${input.getAttribute('value-mostrar')}</div>`

                } else if (input.name == 'numDisciplinasParcial') {

                    if (input.value != "") {

                        input.parentNode.innerHTML = `N° de Disciplina <div class="divPreencher"> ${input.value} </div>`


                    } else {

                        input.parentNode.innerHTML = ``

                    }




                }



            }


        }



        preencheDadosTabelaHistoricoMedio()
        preencheAnos()
        preencherCertificado()
        preencherVerticalEsquerda()
        preencheCargaHorariaTotal()
        deferirHistoricoCompleto()



        function deferirHistoricoCompleto() {

            deferirCertificado()
            deferirInformacoesComplementares()
            deferirVerticalEsquerda()
            deferirCargaHorariaTotal()

        }




    }


}

