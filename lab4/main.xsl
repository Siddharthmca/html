<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<!-- TODO: Auto-generated template -->
		<html>
		<head>
		</head>
		<body>
		
		<h1 style="text-align:center">User Details</h1>
		<table border="2" align="center">
		<tr bgcolor="grey">
		<th>User ID</th>
		<th>Name</th>
		<th>Designation</th>
		<th>Age</th>
		</tr>
		<xsl:for-each select="Discussion-Cube/Users">
		<xsl:sort select="name"></xsl:sort>
		<tr>
		<td>
			<xsl:value-of select="uid"></xsl:value-of>
		</td>
		<td>
			<xsl:value-of select="name"></xsl:value-of>
		</td>
		<td>
			<xsl:value-of select="dsgn"></xsl:value-of>
		</td>
		<td>
			<xsl:value-of select="age"></xsl:value-of>
		</td>
		</tr>
		</xsl:for-each>
		</table>
		
<!--  --> <!--  --> <!--  -->  <!--  --> <!--  --> <!--  --> <!--  --> <!--  --> <!--  -->  <!--  --> <!--  --> 
		<h1 style="text-align:center; color=blue">Room Details</h1>
		<table border="2" align="center">
		<tr>
		<th>Room ID</th>
		<th>Room Description</th>
		<th>Room Mode</th>
		</tr>
		<xsl:for-each select="Discussion-Cube/Rooms">
		<xsl:sort select="rid"></xsl:sort>
		<tr>
			<td>
				<xsl:value-of select="rid"></xsl:value-of>
			</td>
			<td>
				<xsl:value-of select="rtitle"></xsl:value-of>
			</td>
			<td>
				<xsl:value-of select="rmode"></xsl:value-of>
			</td>

		</tr>
		</xsl:for-each>
		</table>
		
<!--  --> <!--  --> <!--  -->  <!--  --> <!--  --> <!--  --> <!--  --> <!--  --> <!--  -->  <!--  --> <!--  --> 
		<h1 style="text-align:center">Room Status Details</h1>	
		<table border="2" align="center">
		<tr>
		<th>Room Status ID</th>
		<th>Room ID</th>
		<th>Room Active / Inactive </th>

		</tr>
		<xsl:for-each select="Discussion-Cube/RoomStatus">
		<tr bgcolor="#9acd32">
			<td>
				<xsl:value-of select="rs.id"></xsl:value-of>
			</td>
			<td>
				<xsl:value-of select="rid"></xsl:value-of>
			</td>
			<td>
				<xsl:value-of select="rActive"></xsl:value-of>
			</td>
			
		</tr>
		</xsl:for-each>
		</table>
<!--  --> <!--  --> <!--  -->  <!--  --> <!--  --> <!--  --> <!--  --> <!--  --> <!--  -->  <!--  --> <!--  --> 
		<h1 style ="text-align:center; color=red">Participant</h1>
		<table border="5" align="center">
		<tr>
		<th>Participant ID</th>
		<th>Participant Name</th>
		</tr>
		<xsl:for-each select="Discussion-Cube/Participant">
		<tr bgcolor="red">
			<td align="center">
				<xsl:value-of select="rid"></xsl:value-of>
			</td>
			<td>
				<xsl:value-of select="pname"></xsl:value-of>
			</td>
		</tr>
		</xsl:for-each>
		</table>
<!--  --> <!--  --> <!--  -->  <!--  --> <!--  --> <!--  --> <!--  --> <!--  --> <!--  -->  <!--  --> <!--  --> 
		<h1 style ="text-align:left">Hashtags</h1>
		<table border="5" align="left">
		<tr bgcolor="magenta">
		<th>Tag ID</th>
		<th>Hashtag</th>
		</tr>
		<xsl:for-each select="Discussion-Cube/Hashtags">
		<xsl:sort select="hid"></xsl:sort>
		<tr>
			<td>
				<xsl:value-of select="hid"></xsl:value-of>
			</td>
			<td>
				<xsl:value-of select="htext"></xsl:value-of>
			</td>
		</tr>
		</xsl:for-each>
		</table>
<!--  --> <!--  --> <!--  -->  <!--  --> <!--  --> <!--  --> <!--  --> <!--  --> <!--  -->  <!--  --> <!--  --> 
		<h1 style ="text-align:center">Categories</h1>
		<table border="5" align="center">
		<tr bgcolor="magenta">
		<th>Tag ID</th>
		<th>Hashtag</th>
		</tr>
		<xsl:for-each select="Discussion-Cube/Categories">
		<xsl:sort select="cid"></xsl:sort>
		<tr>
			<td>
				<xsl:value-of select="cid"></xsl:value-of>
			</td>
			<td>
				<xsl:value-of select="ctext"></xsl:value-of>
			</td>
		</tr>
		</xsl:for-each>
		</table>
		
		<h2>Employee Details</h2>
  		<xsl:apply-templates/>
		
		</body>
		</html>
	</xsl:template>
	<!--  --> <!--  --> <!--  -->  <!--  --> <!--  --> <!--  --> <!--  --> <!--  --> <!--  -->  <!--  --> <!--  --> 
	
<xsl:template match="Users">
  <p>
  <xsl:apply-templates select="name"/>
  <xsl:apply-templates select="dsgn"/>
  </p>
</xsl:template>

<xsl:template match="name">
  User Name: <span style="color:Red">
  <xsl:value-of select="."/></span>
  <br />
</xsl:template>

<xsl:template match="dsgn">
  Designation <span style="color:Blue">
  <xsl:value-of select="."/></span>
  <br />
</xsl:template>
	
</xsl:stylesheet>
