<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
            <style>
            * {box-sizing: border-box;}

body { 
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
}

th, td {
  text-align: left;
  padding: 8px;
}
tr:nth-child(even){background-color: #f2f2f2}


@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
  
  .header-right {
    float: none;
  }
}


</style>
            <div class="header">
  <a href="#default" class="logo">Employee Management System</a>
 
</div>

<div style="padding-left:20px">
  <h1>Employee Details</h1>
  <p>
  <table style="overflow-x:auto;">
  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>SALARY</th>
                    <th>EMAIL</th>
                    <th>PHONE</th>
                    <th>DESIGNATION</th>
                    <th>PROMOTION</th>
                </tr>
                <xsl:for-each select="Company/Employee">
                    <tr>
                        <td><xsl:value-of select="@id"/></td>
                        <td><xsl:value-of select="Emp-name"/></td>
                        <td><xsl:value-of select="Emp-age"/></td>
                        <td><xsl:value-of select="Emp-salary"/></td>
                        <td><xsl:value-of select="Emp-emailid"/></td>
                        <td><xsl:value-of select="Emp-phonenum"/></td>
                        <td><xsl:value-of select="Emp-designation"/></td>
                        <xsl:if test="Emp-age &gt; 50">
                            <td>Associate Project Manager</td>
                        </xsl:if>
                        <xsl:if test="Emp-age &gt; 41">
                            <td>Team Leader</td>
                        </xsl:if>
                        <xsl:if test="Emp-age &lt; 40">
                            <td>Developer</td>
                        </xsl:if>
                    </tr>
                                    </xsl:for-each>

  </table>
  </p>
</div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>




