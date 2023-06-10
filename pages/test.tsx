
const TestPage = ({ sections, meta }: any) => {
  
  return <>
      <form action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">

        <input type="hidden" name="oid" value="00D8F0000004bQU" />
        <input type="hidden" name="retURL" value="https://portalverse-uane-git-feat-pixels-techlottus.vercel.app/thank-you" />

      

        <label htmlFor="first_name">Nombre</label><input  id="first_name" maxLength={40} name="first_name" size={20} type="text" /><br/>

        <label htmlFor="last_name">Apellidos</label><input  id="last_name" maxLength={80} name="last_name" size={20} type="text" /><br/>

        <label htmlFor="email">Email</label><input  id="email" maxLength={80} name="email" size={20} type="text" /><br/>

        <label htmlFor="company">Compañía</label><input  id="company" maxLength={40} name="company" size={20} type="text" /><br/>

        <label htmlFor="city">Ciudad</label><input  id="city" maxLength={40} name="city" size={20} type="text" /><br/>

        <label htmlFor="state">Estado/Provincia</label><input  id="state" maxLength={20} name="state" size={20} type="text" /><br/>

        <label htmlFor="mobile">Celular</label><input  id="mobile" maxLength={40} name="mobile" size={20} type="text" /><br/>

        <label htmlFor="zip">Código postal</label><input  id="zip" maxLength={20} name="zip" size={20} type="text" /><br/>

        Fecha de Nacimiento:<span className="dateInput dateOnlyInput"><input  id="00N6g00000OMBrV" name="00N6g00000OMBrV" size={12} type="text" /></span><br/>

        Nivel:<select  id="00N6g00000OMBre" name="00N6g00000OMBre" title="Nivel"><option value="">--Ninguno--</option><option value="Bachillerato">Bachillerato</option>
        <option value="Educación Continua">Educación Continua</option>
        <option value="Licenciatura Ejecutiva">Licenciatura Ejecutiva</option>
        <option value="Licenciatura Escolarizada">Licenciatura Escolarizada</option>
        <option value="Maestría">Maestría</option>
        <option value="Preparatoria">Preparatoria</option>
        <option value="Licenciatura">Licenciatura</option>
        <option value="Doctorado">Doctorado</option>
        <option value="Generico">Generico</option>
        <option value="Especialidades">Especialidades</option>
        <option value="Posgrados">Posgrados</option>
        <option value="Talleres">Talleres</option>
        <option value="Diplomado">Diplomado</option>
        <option value="Curso">Curso</option>
        </select><br/>

        Modalidad:<select  id="00N6g00000OMBrc" name="00N6g00000OMBrc" title="Modalidad"><option value="">--Ninguno--</option><option value="Presencial">Presencial</option>
        <option value="Semipresencial">Semipresencial</option>
        <option value="Online">Online</option>
        </select><br/>

        Línea de negocio:<select  id="00N6g00000Tbk3B" name="00N6g00000Tbk3B" title="Línea de negocio"><option value="">--Ninguno--</option><option value="UTC">UTC</option>
        <option value="ULA">ULA</option>
        <option value="UANE">UANE</option>
        <option value="UTEG">UTEG</option>
        <option value="INDO">INDO</option>
        <option value="BEDU">BEDU</option>
        </select><br/>

        Área de interés:<select  id="00N4X00000B5bAm" multiple={true} name="00N4X00000B5bAm" title="Área de interés"><option value="None">None</option>
        </select><br/>

        Género:<select  id="00N4X00000B5bAs" name="00N4X00000B5bAs" title="Género"><option value="">--Ninguno--</option><option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Decline to State">Decline to State</option>
        </select><br/>

        <input type="submit" name="submit" />

      </form>
    </>
};
export default TestPage;
